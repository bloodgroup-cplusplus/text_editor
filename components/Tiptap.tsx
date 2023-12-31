'use client'
import {useEditor,EditorContent, Editor} from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { Toolbar } from "./ToolBar"

export default function Tiptap({
    description,
    onChange,
}:{
    description:string
    onChange:(richText:string) =>void 
}){
    const editor = useEditor ({
        extensions:[StarterKit.configure()],
        content:description,
        editorProps:{
                attributes:{
                    class:
                    "rounded-md border min-h-[150px] border-input bg-back"
                },
        },
    onUpdate({editor}){
        onChange(editor.getHTML())
        console.log(editor.getHTML())
    },
    })
    return (
        <div className="flex flex-col justify-stretch min-h-[250px]">
            <Toolbar editor={editor}/>
            <EditorContent editor={editor}/>
        </div>
    )
}