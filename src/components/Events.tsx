import TalkEvent from './TalkEvent'
// image, title, date, time, fee, description

const allEvents = [
  {
    id: 1,
    img: '@/assets/images/events/event1.png',
    title: 'Soccer Tournament',
    date: 'Friday - 17/08',
    time: '9:30am',
    entry: 'Free',
    description:
      'Event Description. Maecenas scelerisque, arcu quis tempus egestas, ligula diam molestie lectus, tincidunti.',
  },
  {
    id: 2,
    img: '../assets/images/events/event2.png',
    title: 'Semi Finals - Swimming',
    date: 'Saturday - 19/09',
    time: '9:30am',
    entry: 'Free',
    description:
      'Mauris scelerisque odio id rutrum volutpat. Pellentesque urna odio, vulputate at tortor vitae, hendrerit blandit lorem.',
  },
  {
    id: 3,
    img: '@/assets/images/events/event3.png',
    title: 'Gymnastics Competitions',
    date: 'Sunday - 21/03',
    time: '9:30am',
    entry: 'Free',
    description:
      'Pellentesque vestibulum lorem vel gravida aliquam. Morbi porta, odio id suscipit mattis, risus augue condimentum purus.',
  },
  {
    id: 4,
    img: 'src/assets/images/events/event4.png',
    title: 'Judo - Training',
    date: 'Wednesday - 21/08',
    time: '12:30pm',
    entry: 'Free',
    description:
      'Pellentesque vestibulum lorem vel gravida aliquam. Morbi porta, odio id suscipit mattis, risus augue condimentum purus.',
  },
  {
    id: 5,
    img: 'src/assets/images/events/event5.png',
    title: 'Fit Dance in the sqaure',
    date: 'Teusday - 22/03',
    time: '8:00am',
    entry: 'Free',
    description:
      'Mauris scelerisque odio id rutrum volutpat. Pellentesque urna odio, vulputate at tortor vitae, hendrerit blandit lorem. ',
  },
]

function Events() {
  return (
    <div className="mt-2 flex flex-col sm:!flex-row sm:!flex-wrap items-center gap-5  self-center sm:justify-center">
      {allEvents.map((ev, index) => (
        <TalkEvent
          key={index}
          img={ev.img}
          title={ev.title}
          date={ev.date}
          time={ev.time}
          entry={ev.entry}
          desc={ev.description}
        />
      ))}
    </div>
  )
}

export default Events
