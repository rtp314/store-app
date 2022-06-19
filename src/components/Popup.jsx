import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

let setTitleFn;
let setContentsFn;

function updatePopup(title, contents) {
    setTitleFn(title);
    setContentsFn(contents);
}

export default function Popup() {
    const dialogRef = useRef();
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");

    useEffect(() => {
        setTitleFn = setTitle;
        setContentsFn = setContents;
    }, [setTitle, setContents]);

    function showModal() {
        dialogRef.current.showModal();
    }

    function hideModal() {
        dialogRef.current.close();
    }

    return (
        <>
            <dialog id='popup' ref={dialogRef} className='modal' style={{ padding: 0 }}>
                <div id='popup-wrapper'>
                    {title && <h3>{title}</h3>}
                    {typeof contents === "string" && <p>{contents}</p>}
                    {Array.isArray(contents) && contents.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
                </div>
            </dialog>
        </>
    );
}

export function usePopup(title, contents) {
    const popupRef = useRef();
    const popupWrapperRef = useRef();

    useEffect(() => {
        popupRef.current = document.getElementById("popup");
        popupWrapperRef.current = document.getElementById("popup-wrapper");
        updatePopup(title, contents);
    }, []);

    function eventHandler(e) {
        if (!popupWrapperRef.current.contains(e.target)) {
            hide();
        }
    }

    function show() {
        popupRef.current.showModal();
        popupRef.current.addEventListener("click", eventHandler);
    }

    function hide() {
        popupRef.current.close();
        popupRef.current.removeEventListener("click", eventHandler);
    }

    return { show, hide };
}
