import axios from 'axios';
import { useEffect, useState } from 'react';

interface Post {
  id: number;
  attributes: {
    Tittle: string;
    Content: string;
    createAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}
export default function LocationPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get('http://localhost:1337/api/posts', {
        headers: {
          Authorization:
            'b88c1998f1054ac7097dc3377dc63a06bfee104007c8348b308f584d90d415a6e5d0285e0d9a78372fc79e86e9a23a3650f50843bfcbed222d66e4b702204685e0e9ebff00c59c0efac1e146ca0775a68453ce69b72c993b11d5914940cf90943f2bfbbe22a667a85989eb1740f8992dc8fdafd84c520652255250dd7adbf1a5',
        },
      });
      setPosts(response.data);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <h1>Location</h1>
      {posts.map(post => (
        <p key={post.id}>{post.attributes.Tittle} </p>
      ))}
    </div>
  );
}
