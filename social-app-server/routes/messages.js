const express =require('express');
const router=express.Router({mergeParams:true});

const {createMessage,
         getMessage,
         deleteMessage,
         updateMessage
        }=require("../handlers/messages");


        //prefix /api/users/:id/messages 
router.route("/").post(createMessage);
router
     .route("/:message_id")
     .get(getMessage)
     .delete(deleteMessage)
     .put(updateMessage);
module.exports=router;