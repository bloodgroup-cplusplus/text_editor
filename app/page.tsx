import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import {useForm} from "react-hook-form"
import * as z from "zod"
export default function Home() {
    const form = useForm({
      mode:'onChange',
      defaultValues:{
        title: '',
        price:29.99,
        description:"",

      },
    })
    return (
      <main className=""></main>

    )

}
  