import Image from "next/image";

interface ApproachCardProps {
  imageSrc: string;
  imageAlt: string;
  titleItalic: string;
  titleBold: string;
  description: string;
  italicWord?: string;
}

function ApproachCard({
  imageSrc,
  imageAlt,
  titleItalic,
  titleBold,
  description,
  italicWord,
}: ApproachCardProps) {
  // Function to render description with optional italic word
  const renderDescription = () => {
    if (!italicWord) return description;

    const parts = description.split(italicWord);
    if (parts.length === 1) return description;

    return (
      <>
        {parts[0]}
        <span className="font-serif italic">{italicWord}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className="flex flex-col items-center gap-6 rounded-3xl border border-foreground bg-[#FFFDFC] p-6 sm:flex-row sm:items-start sm:gap-8 sm:p-8">
      {/* Graphic */}
      <div className="flex-shrink-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={140}
          height={140}
          className="h-28 w-28 object-contain sm:h-36 sm:w-36"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col text-center sm:text-left">
        <h3 className="mb-3 text-xl font-medium md:text-2xl">
          <span className="font-serif italic">{titleItalic}</span>{" "}
          <span className="font-sans font-semibold">{titleBold}</span>
        </h3>
        <p className="font-sans text-base leading-relaxed text-foreground md:text-lg">
          {renderDescription()}
        </p>
      </div>
    </div>
  );
}

const approachData = [
  {
    imageSrc: "/images/approach-curiosity.png",
    imageAlt: "Dot pattern representing curiosity and exploration",
    titleItalic: "Start with",
    titleBold: "curiosity",
    description:
      "I try to approach every problem with an open mind, ready to listen and learn before I conclude. These human stories and insights shape what I build and keep my work grounded in what users actually need.",
  },
  {
    imageSrc: "/images/approach-improve.png",
    imageAlt: "Dial graphic representing iterative improvement",
    titleItalic: "Make, test,",
    titleBold: "improve",
    description:
      "My process involves experimenting often, seeking feedback early, and working imperfectly to get closer to the best solutions — while understanding that there's never one right answer, only better ones.",
  },
  {
    imageSrc: "/images/approach-care.png",
    imageAlt: "Circle representing design as care",
    titleItalic: "Design as a",
    titleBold: "form of care",
    description:
      "I believe in designing with communities, not just for them. The people closest to a problem understand it best, and the most impactful and equitable design creates space for that knowledge to lead.",
    italicWord: "with",
  },
];

export function ApproachSection() {
  return (
    <section className="px-12 py-16 md:px-24 md:py-20 lg:px-40 lg:py-24 xl:px-52">
      {/* Approach Badge */}
      <div className="mb-12 inline-flex items-center rounded-full border-[2px] border-primary px-5 py-2">
        <span className="text-lg text-primary md:text-xl font-medium">Approach</span>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-6">
        {approachData.map((item, index) => (
          <ApproachCard
            key={index}
            imageSrc={item.imageSrc}
            imageAlt={item.imageAlt}
            titleItalic={item.titleItalic}
            titleBold={item.titleBold}
            description={item.description}
            italicWord={item.italicWord}
          />
        ))}
      </div>
    </section>
  );
}
