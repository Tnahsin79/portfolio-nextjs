import { services } from "@/data/constants";
import ServiceCard from "./ui/ServiceCard";

export default function Services() {
  return (
    <div className="space-y-6">
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          title={service.title}
          description={service.description}
          icon={service.icon}
        />
      ))}
    </div>
  );
}
