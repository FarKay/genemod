import Button from "./Button";

function CTA() {
  return (
    <div className="lg:flex lg:flex-row lg:gap-4 lg:ml-auto hidden">
      <div>
        <Button type="secondary">Log in</Button>
      </div>
      <div>
        <Button type="primary">Request demo</Button>
      </div>
    </div>
  );
}

export default CTA;
