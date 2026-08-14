"use client";
import React, { useState, useEffect } from "react";

export const Typewriter = ({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenWords = 2000,
  className = "",
}: {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
  className?: string;
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const handleType = () => {
      if (!isDeleting) {
        // Typing forward
        if (currentText !== currentWord) {
          setCurrentText(currentWord.substring(0, currentText.length + 1));
        } else {
          // Finished typing word
          setTimeout(() => setIsDeleting(true), delayBetweenWords);
        }
      } else {
        // Deleting backward
        if (currentText !== "") {
          setCurrentText(currentWord.substring(0, currentText.length - 1));
        } else {
          // Finished deleting word
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    const timer = setTimeout(
      handleType,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [
    currentText,
    isDeleting,
    words,
    currentWordIndex,
    typingSpeed,
    deletingSpeed,
    delayBetweenWords,
  ]);

  return (
    <span className={className}>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-navy font-semibold">
        {currentText}
      </span>
      <span className="animate-pulse border-r-4 border-blue-800 ml-1 inline-block h-[0.8em] align-middle"></span>
    </span>
  );
};
