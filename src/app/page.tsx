
import Form from "next/form";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    {/*<form action="/submit" >*/}

    {/*  <input type="text" name={'name'} placeholder={'login'}/>*/}
    {/*  <input type="text" name={'password'} placeholder={'password'}/>*/}
    {/*  <button>submit</button>*/}
    {/*</form>*/}

      <Form action={'/submit'}>
        <input type="text" name={'name'} placeholder={'login'}/>
        <input type="text" name={'password'} placeholder={'password'}/>
        <button>submit</button>
      </Form>
    </div>
  );
}
