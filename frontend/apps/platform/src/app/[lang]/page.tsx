import { Greeting } from "../../Greeting/Greeting";
import { redirect } from 'next/navigation';

const Page = () => {
  redirect('/courses'); // Temp redirect to courses page until dashboard is ready

  return (
    <div className="p-4">
      <Greeting />
    </div>
  );
}

export default Page;
