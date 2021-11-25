import React, {useEffect, useState} from "react";
import Post from "../../Components/Post/Post"
import NewPost from "../../Components/NewPost/NewPost"
import Navbar from "./Navbar/Navbar";
import { useUserContext } from "../../Contexts/UserContext";
import { useUserServices } from "../../Services/PW2021/User.services";

const Admin = () => {
  const context = useUserContext();
  const [posts, setPosts] = useState([]);
      useEffect(() => {
        const fetchPokemons = async () => {
          try {
            const token = context.getToken();
            console.log(token)
            const filters = { limit: 100, page: 0 };
            const response = await useUserServices.getAll(filters, token)
            console.log(response.data);
            setPosts(response.data)
            /* 
            const response = await context.getPost(filters.limit, filters.offset, token) ;
            console.log(response); */
            
    
           
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchPokemons();
      }, []);
    return (
        <div className="min-h-screen  h-full bg-scroll bg-repeat bg-purple-400  grid grid-cols-6">
            <Navbar/>
            <div className="col-start-1 col-span-6 sm:col-start-2 sm:col-span-4 xl:col-start-3 xl:col-span-2">
                <NewPost /> 
                {
                  posts.map( post => {
                  return <Post
                  post={post}
                    />
                })
                }

                

          

            </div>
        </div>
    );
};

export default Admin;