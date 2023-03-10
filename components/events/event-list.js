import EventItem from "./event-item";

const EventList = (props) => {
  const { items } = props;

  return (
    <ul>
      {items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
        ></EventItem>
      ))}
    </ul>
  );
};

export default EventList;
