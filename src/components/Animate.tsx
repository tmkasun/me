import React, { useEffect, useRef, useState } from "react";

const CharAnimator = (props: { char: string, delay?: number, isRandom?: boolean }) => {
    let { char, delay, isRandom } = props;
    if (delay === undefined || isRandom) {
        delay = Math.floor(Math.random() * (1000 - 50) + 50);
    }
    return (
        <div style={{ "--item-count": "-92%", "--ani-delay": `${delay}ms` } as React.CSSProperties} className="h-10 m-auto overflow-hidden relative before:top-0 before:left-0 before:z-10 before:w-full before:content-[''] before:h-3 before:absolute before:bg-gradient-to-b before:from-[rgba(255,255,255,1)] before:to-[rgba(255,255,255,0)] after:left-0 after:bottom-0 after:z-10 after:w-full after:h-3 after:content-[''] after:absolute after:bg-gradient-to-t after:from-[rgba(255,255,255,1)] after:to-[rgba(255,255,255,0)]">
            <ul className="m-0 p-0  animate-goUp">
                {new Array("k".toLowerCase().charCodeAt(0) - "a".charCodeAt(0)).fill(null).map((_, i) => (
                    <li key={i} className="opacity-100 h-5 py-3 px-1 list-none text-xl">
                        {String.fromCharCode("a".charCodeAt(0) + i)}
                    </li>
                ))}
                <li className="opacity-100 h-5 py-3 px-1 list-none mt-3 capitalize">
                    {char}
                </li>
            </ul>
        </div>
    );
};

export default function Animate(props: { word: string }) {
    const { word } = props;
    return (
        <div className="flex">
            {word.split("").map((e, i) => (
                <CharAnimator delay={i * 100} key={i} char={e} />
            ))}
        </div>
    );

}