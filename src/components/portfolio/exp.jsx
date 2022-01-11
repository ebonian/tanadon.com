export default function Exp() {
  return (
    <div className="flex flex-col sm:w-96 pr-4 sm:pr-0 text-lg space-y-2">
      <Bio year="2004" event="Born in Bangkok, Thailand." />
      <Bio year="2007" event="Attend elementary school, Thawsi school." />

      <Bio year="2016" event="Attend high school, Panyaprateep school." />
    </div>
  );
}

function Bio({ year, event, color }) {
  return (
    <div className="flex">
      <h1 className="font-bold mr-4">{year}</h1>
      <p className={`text-${color}`}>{event}</p>
    </div>
  );
}
