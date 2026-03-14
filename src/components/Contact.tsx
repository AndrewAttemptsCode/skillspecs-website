const contactList = [
  {
    id: 0,
    title: "Sponsorship & Partnerships",
    email: "SkillSpecs@CrusaderTalent.com",
  },
  {
    id: 1,
    title: "Business General",
    email: "SkillSpecsOfficial@gmail.com",
  },
];

const Contact = () => {
  return (
    <div>
      <h2 className="font-semibold uppercase">Enquiries</h2>
      <div className="flex flex-col gap-2">
        {contactList.map((contact) => (
          <a
            key={contact.id}
            href={`mailto:${contact.email}`}
            className="w-fit rounded-md from-amber-600 to-amber-700 bg-linear-to-t p-2 font-semibold text-amber-50 outline-0 transition-all duration-300 ease-in-out hover:brightness-110 focus-visible:ring-2 focus-visible:ring-amber-900"
          >
            {contact.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
