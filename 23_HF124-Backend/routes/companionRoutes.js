const express = require('express');
const {upload}=require('../config');
const uploadController = require('../controllers/uploadController');
const commentController = require('../controllers/commentController');
const authMiddleware=require('../middleware/authMiddleware');
const postController = require('../controllers/postController');

const router = express.Router();


// 동행인 게시글 작성, 삭제, 수정
router.post('/cupload', upload.array('files', 1),authMiddleware, uploadController.companionUploadpost);
router.delete('/:cpostID', authMiddleware, uploadController.companionDeletepost);
router.put('/:cpostID', upload.array('files', 1),authMiddleware, uploadController.companionUpdatePost);

//동행인 게시글 조회
router.get('/',authMiddleware, postController.getclist);
router.get('/:cpostID', upload.array('files', 1),authMiddleware, postController.getcpost);

// 동행인 댓글 작성, 삭제
router.get('/posts/search-keyword', uploadController.searchKeyword);
router.post('/comments/:cpostID',authMiddleware, commentController.companionAddComment);
router.delete('/comments/:cpostID',authMiddleware, commentController.companionDeleteComment);

router.get('/posts', postController.getclist);
router.get('/posts/:cpostID',postController.getcpost);

module.exports = router;
