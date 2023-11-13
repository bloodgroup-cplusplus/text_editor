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

const formSchema = z.object ({
  title:z.string().min(5,{message:'Hey the title is not long enough'})
  .max(100,{message:"Its too long"}),
  price:z.number().min(5,{message:"Hey the title is not long enough"}),
  description:z.string()
  .min(5,{message:"Hey the title is not long enough"})
  .max(100,{message:"Its too long"})
  .trim(),
})
export default function Home() {
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
    return (
      <main className="p-24">
        <Form {...form}>
          <form>
            <FormField
              control={form.control}
              name="title"
              render={({field})=>(
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Main title for your blog" {...field}/>
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
  