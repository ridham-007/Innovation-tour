var exports = (module.exports = {});
const { Task, validate } = require("../models/taskModal");

exports.addTask = async (req, res) => {
    try {
        const { error } = validate(req.body);
        if (error)
            return res
                .status(400)
                .json({ success: false, msg: error.details[0].message });

        let task = await new Task({
            name: req.body.taskName,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            numberOfSlots: req.body.numberOfSlots,
            venue: req.body.venue,
            comments: req.body.comments
        }).save();
        console.log(task);
        res.status(200).json({
            success: true,
            msg: "Task is created successfully.",
        });
    } catch (error) {
        res.status(400).send("An error occurred");
    }
}

exports.getAllTask = async (req, res) => {
    try {
        const allTask = await Task.find();
        res.status(200).json({
            success: true,
            allTask: allTask,
        });
    } catch (error) {
        res.status(400).send("An error occurred");
    }
}

exports.updateTask = async (req, res) => {
    try {
        await Task.findOneAndUpdate(
            {
                _id: req.body.id,
            },
            req.body.task,
            { upsert: true, new: true },
            function (err, result) {
                if (err) {
                    res.status(200).json({
                        success: false,
                        msg: "Error in Updating",
                    });
                }
                res.status(200).json({
                    success: true,
                    msg: "Successfully Updated",
                });
            }
        );
    } catch (error) {
        res.status(400).send("An error occurred");
    }
}

exports.deleteTask = async function (req, res) {
    try {
        await Task.findOneAndDelete(
            {
                _id: req.body.id,
            },
            function (err, result) {
                if (err) {
                    res.status(200).json({
                        success: false,
                        msg: "Error in Deletion",
                    });
                }
                res.status(200).json({
                    success: true,
                    msg: "Successfully Deleted",
                });
            }
        );
    } catch (error) {
        res.status(400).send("An error occured");
    }
};



exports.registerMeeting = async (req, res) => {

    const { taskId, userId } = req.body;

    try {
        
        let oldTask = await Task.findById(taskId);
        if (!oldTask) {
            return res.status(404).json({ error: 'Meeting not found' });
        }
        const isSlotsAvailabel = oldTask.users.length < Number(oldTask.numberOfSlots)
        if (!isSlotsAvailabel){
            return res.status(200).json({
                success: true,
                msg: "Slots full for registration!",
            });
        }
        if (oldTask.users) {
            oldTask.users = [...oldTask.users, userId];
        } else {
            oldTask.users = [userId];
        }
        oldTask.save();
        res.status(200).json({
            success: true,
            msg: "Register for Meeting successfully.",
        });
    } catch (error) {
        res.status(400).send("An error occurred");
    }

}

exports.unRegister = async (req, res) => {
    const { taskId, userId } = req.body;
    try {
        let oldTask = await Task.findById(taskId);
        if (!oldTask) {
            return res.status(404).json({ error: 'Meeting not found' });
        }
        if (oldTask.users) {
            const dataArr = oldTask.users.filter(id => id !== userId)
            oldTask.users = [...dataArr];
        } else {
            oldTask.users = [userId];
        }
        oldTask.save();
        res.status(200).json({
            success: true,
            msg: "Meeting unregister successfully.",
        });
        
    } catch (error) {
        res.status(400).send("An error occurred");
    }
}