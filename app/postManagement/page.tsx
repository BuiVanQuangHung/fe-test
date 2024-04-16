"use client";

import CustomDialog from "@/components/Dialog";
import Paginate from "@/components/paginate";
import CustomTable from "@/components/Table";
import React, { useEffect, useMemo, useState } from "react";
import ReactPaginate from "react-paginate";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const PostManagement = () => {
  //! State
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const columns = ["Id", "UserId", "Title", "Action"];
  const [open, setOpen] = useState(false);
  const [dataPost, setDataPost] = useState<Post>();
  //! Fucntion
  //Call api
  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=10`
    )
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, [currentPage]);

  //data body table
  const renderBody = useMemo(() => {
    if (!posts) {
      return;
    }
    return posts.map((item: Post) => {
      return {
        id: <h3>{item?.id}</h3>,
        userid: <h3>{item?.userId}</h3>,
        title: <h3>{item?.title}</h3>,
        action: (
          <p
            className="font-bold cursor-pointer"
            onClick={() => handleShow(item)}
          >
            Show
          </p>
        ),
      };
    });
  }, [posts]);

  const handleShow = (data?: Post) => {
    setOpen(!open);
    setDataPost(data);
  };

  //! Render
  return (
    <div className="flex flex-col gap-3 w-full">
      <p className="text-blue-500 text-2xl font-bold">Users Management</p>
      <div className="w-full flex justify-center ">
        <CustomTable body={renderBody || []} header={columns} />
      </div>
      <Paginate currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <CustomDialog data={dataPost} isOpen={open} onClose={handleShow} />
    </div>
  );
};

export default PostManagement;
