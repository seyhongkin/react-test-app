import EventForm from "../components/EventForm";

function NewEventPage() {
  return <EventForm method="post" />;
}

export default NewEventPage;

// export async function action({ request, params }) {
//   const data = await request.formData();

//   const eventData = {
//     title: data.get("title"),
//     image: data.get("image"),
//     date: data.get("date"),
//     description: data.get("description"),
//   };

//   const response = await fetch("http://localhost:8080/events", {
//     method: "post",
//     headers: {
//       "Content-Type": "Application/json",
//     },
//     body: JSON.stringify(eventData),
//   });

//   if (response.status === 422) {
//     return response;
//   }

//   if (!response.ok) {
//     throw new Response(JSON.stringify({ message: "Fail to add new event." }), {
//       status: 500,
//     });
//   }

//   // redirect
//   return redirect("/events");
// }
