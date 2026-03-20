import Message from "../models/Message.js";
import Event from "../models/event.js";

export const getStats = async (req, res) =>{
    try {
        const [eventStats, messageStats] = await Promise.all([

            Event.aggregate([
                {
                    $facet: {
                        totalEvents: [{ $count: "count" }],
                        lastEvent: [
                            { $sort: { createdAt: -1 } },
                            { $limit: 1 }
                        ],
                        lastUpdatedImage: [
                            { $match: { images: { $exists: true, $ne: [] } } },
                            { $sort: { updatedAt: -1 } },
                            { $limit: 1 },
                            {
                                $project: {
                                lastImage: { $arrayElemAt: ["$images", -1] }
                                }
                            }
                        ]
                    }
                }
            ]),

            Message.aggregate([
                {
                    $group: {
                        _id: null,
                        totalMessages: { $sum: 1 },
                        unreadMessages: {
                        $sum: {
                            $cond: [{ $eq: ["$read", false] }, 1, 0]
                        }
                        }
                    }
                }
            ])
        ]);
        const data = eventStats[0];

        const response = {
            totalEvents: data?.totalEvents[0]?.count || 0,
            lastEvent: data?.lastEvent[0] || null,
            lastImage: data?.lastUpdatedImage[0]?.lastImage || null,
            totalMessages: messageStats[0]?.totalMessages || 0,
            unreadMessages: messageStats[0]?.unreadMessages || 0
        };
        res.json(response);
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message: error.message});
    }
}