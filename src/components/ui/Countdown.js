import Card from "../reuseable/Card";

export default function Countdown() {
  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max text-[#40170f]">
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-lg sm:text-5xl">
          <span style={{ "--value": 15 }}>12</span>
        </span>
        days
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-lg sm:text-5xl">
          <span style={{ "--value": 10 }}>32</span>
        </span>
        hours
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-lg sm:text-5xl">
          <span style={{ "--value": 24 }}>31</span>
        </span>
        min
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-lg sm:text-5xl">
          <span style={{ "--value": 52 }}>32</span>
        </span>
        sec
      </div>
    </div>
    // <>
    //   <Card title="01" subtitle="Days" />
    //   <Card title="01" />
    //   <Card title="01" />
    //   <Card title="01" />
    // </>
  );
}
