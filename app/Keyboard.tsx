"use client"

import { use, useEffect, useState } from "react";
import words from "@/app/words.json"

export default function Keyboard(props: any) {
    const letters: string[] = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
    const [pressed, setPressed] = useState<string[]>([]);
    const [revealed, setRevealed] = useState<string[]>([]);
    const [word, setWord] = useState<string>(() => {
        return words.words[Math.floor(Math.random() * words.words.length)];
      });

    useEffect(() => {
        if (props.not === 6) {
            setTimeout(() => {
                alert(`You didn't guess the word, it was ${word}`);
            }, 5)
            setTimeout(() => {
                setPressed([]);
                setRevealed([]);
                props.setNot(0);
                setWord(words.words[Math.floor(Math.random() * words.words.length)]);
            }, 1000);
        }
    }, [props.not])

    useEffect(() => {
        if (revealed.length === word.length) {
            setTimeout(() => {
                alert("You guessed the word!");
            }, 5)
            setTimeout(() => {
                setPressed([]);
                setRevealed([]);
                props.setNot(0);
                setWord(words.words[Math.floor(Math.random() * words.words.length)]);
            }, 1000);
        }
    }, [revealed.length])


    function handleLetterClick(letter: string): void {
        if (!pressed.includes(letter)) {
            setPressed(p => [...p, letter]);
            if (word.toUpperCase().includes(letter)) {
                setRevealed(r => [...r, letter]);
            }
            else {
                props.setNot((n: number) => n + 1);
            }

        }
    }
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex gap-2 justify-center items-center">
                {word.split("").map((letter: string, i: number) => (
                    <span className="text-8xl uppercase text-black" key={i}>{revealed.includes(letter.toUpperCase()) ? letter : "_"}</span>
                ))}
            </div>
            <div className="max-w-2xl mt-4 flex gap-y-2 flex-wrap gap-x-2 justify-center items-center">
                {letters.map((letter) => (
                    <button onClick={() => handleLetterClick(letter)} className={`border size-[4rem] ${pressed.includes(letter) ? "bg-neutral-400" : "bg-neutral-200"} ${!pressed.includes(letter) && ("hover:bg-neutral-300")} border-black flex justify-center items-center px-4 py-2 text-4xl ${pressed.includes(letter) && ("cursor-default")} ${pressed.includes(letter) ? "text-neutral-600" : "text-black"}`} key={letter}>{letter}</button>
                ))}
            </div>
        </div>
    )
}