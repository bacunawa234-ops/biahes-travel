import Image from 'next/image';
import { peso, photoFor, type TourPackage } from '@/lib/packages';

export function PackageArt({ pkg, sizes, priority = false }: { pkg: TourPackage; sizes: string; priority?: boolean }) {
  return (
    <Image
      src={photoFor(pkg.id)}
      alt={`${pkg.name}: ${pkg.sub}`}
      fill
      sizes={sizes}
      priority={priority}
      style={{ objectFit: 'cover' }}
    />
  );
}

interface CardProps {
  pkg: TourPackage;
  onDetails: (id: string) => void;
  onBook: (id: string) => void;
}

export default function PackageCard({ pkg, onDetails, onBook }: CardProps) {
  return (
    <article className="pkg">
      <div className="art">
        <PackageArt pkg={pkg} sizes="(max-width: 640px) 100vw, (max-width: 1180px) 50vw, 380px" />
        <span className="tag">{pkg.days}</span>
      </div>
      <div className="body">
        <h3>{pkg.name}</h3>
        <p className="sub">{pkg.sub}</p>
        <div className="chips">
          {pkg.inc.slice(0, 3).map((i) => (
            <span className="chip" key={i}>{i.replace(/ with .*$/, '')}</span>
          ))}
        </div>
      </div>
      <div className="foot">
        <div>
          <div className="from">Final price</div>
          <div className="price">{peso(pkg.price)} <small>/ person</small></div>
        </div>
        <div className="actions">
          <button className="btn btn-ghost" type="button" onClick={() => onDetails(pkg.id)}>Details</button>
          <button className="btn btn-gold" type="button" onClick={() => onBook(pkg.id)}>Book Now</button>
        </div>
      </div>
    </article>
  );
}
