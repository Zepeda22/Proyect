import React, {useState} from "react";
import { useForm } from 'react-hook-form'
//import { MdFavoriteBorder, MdFavorite, MdOutlineSend, MdSend} from "react-icons/md";
//import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
//import { FavoriteIcon, FavoriteBorderIcon,ChatIcon ,ChatOutlinedIcon   } from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatIcon from '@mui/icons-material/Chat'
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import Comment from "./Comment/Comment";

//import { RiChat4Line, RiChat4Fill } from "react-icons/ri";https://picsum.photos/500/500
const Post = ({post}) => {
  
    const [iconLike, setIconLike] = useState(<FavoriteBorderIcon className="stroke-current text-gray-500 hover:text-white" fontSize="large"/>)
    const [iconComment, setIconComment] = useState(<ChatOutlinedIcon fontSize="large"/>)
    const [formComment, setFormComment] = useState(<div></div>)

    const {register, errors, handleSubmit} = useForm();

    const onSubmitHandler = (data, e) =>{
        console.log(data);
        e.target.reset();
    }
    const onClickLikeHandler = () =>{
        console.log(iconLike)
        iconLike.type.type.render.displayName === "FavoriteIcon"? setIconLike(<FavoriteBorderIcon fontSize="large"/>):setIconLike(<FavoriteIcon fontSize="large"/>)
    }

    const onClickCommentHandler = () =>{
        if(iconComment.type.type.render.displayName === "ChatIcon"){       
            setIconComment(<ChatOutlinedIcon fontSize="large"/>)
            setFormComment(<div></div>)
        }else{
            setIconComment(<ChatIcon fontSize="large"/>)
            setFormComment(<Comment comments={post.comments}/>)
        }
    }
    



    return (
            <div className="w-full bg-purple-700  rounded-lg flex flex-col mt-3">
                <div className="w-full h-12  flex justify-center items-center hover:underline">
                    {post.title}
                </div>
                <div className="w-full h-96"><img className="w-full h-full object-contain" src={post.image}/></div>
                <div className="w-full h-20 overflow-auto p-2 pt-2  bg-blue-300">{post.description}</div>
                <div className="w-full h-12 flex flex-row justify-between items-center">
                    
                        <button  onClick={onClickLikeHandler} className="ml-6">{iconLike}</button>
                        <button onClick={onClickCommentHandler} className="mr-6">{iconComment}</button>
                    
                    
                </div>
                <div className="w-full h-8 flex flex-row justify-between items-center">
                        <p className="ml-6 text-red-400">{post.likes.length} Me gusta</p>
                        <p className="mr-6 text-red-400">{post.comments.length} Comentarios</p>
                    </div>
                {formComment}
            </div>
    );
};

export default Post;