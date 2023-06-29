import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Meetup_Logo.png/800px-Meetup_Logo.png",
    address: "Some address 5, 12345 Some City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Meetup_Logo.png/800px-Meetup_Logo.png",
    address: "Some address 10, 12345 Some City",
    description:
      "This is a second, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

/* export const getServerSideProps = async (context) => {
  // fetch data from an api
  const req = context.req;
  const res = context.res;

  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}; */

export async function getStaticProps() {
  // fetch data from an api
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
  };
}

export default HomePage;
