import React, { useEffect, useState} from "react";
import { useUserContext } from "../../../Contexts/UserContext";
import { useUserServices } from "../../../Services/PW2021/User.services";

var favId = [];
var allFavPosts = [];
const ViewFav = () => {
    const context = useUserContext();
    const [renderPosts, setRenderPosts] = useState([]);

    const findFavPost = async (id) => {
      try { 
        const token = context.getToken();

        const response = await useUserServices.getOne(id, token)
        console.log(favId.length)
        allFavPosts.push(response)

        
        
        //allFavPosts = allFavPosts.concat( response);
       
      }catch (error) {
      console.error(error);
      }
    }

    useEffect( () => {
        if(allFavPosts.length == 0){
        const myFav = async () => {  
            try {
            const token = context.getToken();
            console.log(token)
            const response = await useUserServices.getAllFavorites(token)
            favId = response.favorites
            console.log(favId.length)
            //posts = posts.concat( response.data)
            favId.map(  (fav) => {
               findFavPost(fav);
            })
            console.log(allFavPosts)
            setRenderPosts(allFavPosts)

            } catch (error) {
              console.error(error);
            }
        };
        myFav(); 
        
      } else (
        setRenderPosts(allFavPosts)
      )
  }, []);

  useEffect( () => {

  }, [renderPosts]);
    

    return (
        <div className=" grid  grid-cols-1 md:grid-cols-3 gap-8">
                {
                  renderPosts.map( Favpost => {
                   if(Favpost.image != null){
                    return <img className="w-full h-full object-contain " src={Favpost.image}/>
                   }
                })
                }
            
            
           {/*  <img className="w-full h-full object-contain object-center" src="https://picsum.photos/200/200"/> */}
        </div>
    );
};

export default ViewFav;