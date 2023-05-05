import express from 'express'
import { protect } from '../MiddelWare/authMideelware.js';
import { accessChat } from '../Controller/ChatController.js';

const chatRouter= express.Router()

chatRouter.post( "/chat" , protect, accessChat);
// chatRouter.get(protect, fetchChats);

export default chatRouter ;
