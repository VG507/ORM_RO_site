import { StickerPill } from './decorations/DecorativeSVGs';

const eventPhoto = `${import.meta.env.BASE_URL}assets/event-photo.jpg`;

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-[#F4F6FB] text-[#062985]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 grid gap-8 lg:gap-12 lg:grid-cols-2 items-center">
        <div>
          <StickerPill text="О проекте" bg="#C4E538" textColor="#062985" />
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl xl:text-5xl tracking-tight leading-tight mt-4 mb-5">
            Работа с молодёжью на Дону
          </h2>
          <p className="text-base sm:text-lg text-[#062985]/85 leading-relaxed max-w-xl">
            Специалисты по работе с молодёжью организуют события, координируют волонтёров,
            ведут проекты и развивают молодёжные пространства Ростовской области.
          </p>
          <p className="text-base sm:text-lg text-[#062985]/85 leading-relaxed max-w-xl mt-4">
            На сайте можно познакомиться с этой работой, подобрать роль и узнать,
            с чего начать профессиональный путь.
          </p>
        </div>
        <figure>
          <img
            src={eventPhoto}
            alt="Участники молодёжного мероприятия сидят в зале и складывают руки в форме сердца"
            className="block w-full h-auto rounded-2xl border-2 border-[#062985]"
            width={1440}
            height={1080}
            loading="lazy"
          />
          <figcaption className="text-sm text-[#062985]/75 mt-2">Участники молодёжного мероприятия</figcaption>
        </figure>
      </div>
    </section>
  );
}
