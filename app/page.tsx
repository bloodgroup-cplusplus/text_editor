'use client'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,

} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import * as z from "zod"
import { language_map } from "@/lib/keyboard"
import { useState } from "react"
import Tiptap from "../components/Tiptap"

const formSchema = z.object ({
  title:z.string().min(5,{message:'Hey the title is not long enough'})
  .max(100,{message:"Its too long"}),
  price:z.number().min(5,{message:"Hey the title is not long enough"}),
  description:z.string()
  .min(5,{message:"Hey the title is not long enough"})
  .max(1000,{message:"Its too long"})
  .trim(),
})
export default function Home() {
  const[first_message,setFirstMessage] = useState("")
    const form = useForm<z.infer<typeof formSchema>>({
      resolver:zodResolver(formSchema),
      mode:'onChange',
      defaultValues:{
        title: '',
        price:29.99,
        description:"",

      },
    })
    function onSubmit(values:z.infer<typeof formSchema>){
      // do something with the form values
      // this iwll be type-safe and validated
    }
    const findMatch = (input_text:string)=>{
      const pattern = new RegExp(
        Object.keys(language_map).sort((a,b)=>b.length-a.length).join("|"),"g",
      )
      const convertedText=input_text.replace(
        pattern,
        (match) => language_map[match],
      )
      return convertedText
    }
    return (
      <main className="p-24">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="title"
              render={({field})=>(
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Main title for your blog" {...field} onChange={(e)=>setFirstMessage(e.target.value)} value={findMatch(first_message)}/>
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({field})=>(
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Tiptap description={field.name} onChange={field.onChange}/>
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
                />
              <Button className="my-4" type="submit">
                Submit
              </Button>
          </form>
        </Form>
      </main>

    )

}
  