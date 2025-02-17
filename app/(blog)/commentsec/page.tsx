"use client";
import React, { useState, useEffect } from "react";

const CommentSection = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<{ name: string; comment: string }[]>(
    []
  );

  // Local storage se comments retrieve karna
  useEffect(() => {
    const savedComments = localStorage.getItem("comments");
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, []);

  // Local storage update karna jab bhi comments change ho
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  // Comment submit karna
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() === "" || comment.trim() === "") return;

    const newComment = { name, comment };
    setComments([...comments, newComment]);
    setComment(""); // Input clear karna
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-md mt-6">
      <h2 className="text-xl font-semibold mb-4">Leave a Comment</h2>

      {/* Name Input */}
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Comment Input */}
      <textarea
        placeholder="Write your comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
      >
        Submit
      </button>

      {/* Display Comments */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Comments</h3>
        {comments.length === 0 ? (
          <p className="text-gray-500">No comments yet.</p>
        ) : (
          comments.map((c, index) => (
            <div key={index} className="bg-gray-100 p-3 rounded mb-2">
              <p className="font-bold">{c.name}</p>
              <p>{c.comment}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CommentSection;
