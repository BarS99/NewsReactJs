import React from "react";

const Contact = () => {
  return (
    <section className="contact mt-md mb-md">
      <div className="container container--lg">
        <picture className="contact__image">
          <source
            media="(min-width: 576px)"
            srcSet={`examples/contact-960.jpg 960w, examples/contact-1440.jpg 1440w, examples/contact-1920.jpg 1920w`}
          />
          <source
            srcSet={`examples/contact-480.jpg 480w, examples/contact-720.jpg 720w`}
          />
          <img src="examples/contact-1920.jpg" alt="Contact" />
        </picture>
        <h1 className="text__title text__title--h1 mb-md mt-md">Contact</h1>
        <div className="text text--justify text--cols">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad aliquid
          iure vitae pariatur harum magnam consequuntur ratione mollitia eos
          quia. Veritatis debitis praesentium est voluptates! Assumenda aut
          numquam velit excepturi! Debitis laudantium ipsum inventore, autem
          delectus dolore perferendis alias illo pariatur et tenetur hic
          distinctio odit officia aut porro ratione? Ex nisi consequatur tempora
          quasi illo in quod aliquid eius. Fugit numquam commodi exercitationem
          quo voluptates repudiandae repellat facere? Labore amet distinctio
          eligendi, a non cum autem! Nobis eveniet architecto, veniam debitis
          expedita ducimus quibusdam, necessitatibus soluta sapiente, mollitia
          iure. Unde quasi voluptates at porro, cum dolorum molestias, quam iste
          minus blanditiis quidem quis ea nulla tempore enim velit totam,
          distinctio mollitia voluptate incidunt modi iusto. Omnis suscipit sunt
          repellat? Sunt fuga soluta cupiditate nam, doloremque voluptatem
          facilis iure, enim aut possimus magnam? Excepturi sed voluptatibus
          omnis sunt veritatis quis inventore eveniet accusantium molestias
          facere nisi soluta, repellat sequi tempora. Illum, sequi minima.
          Dignissimos qui eveniet porro tempora quam architecto quos ducimus
          commodi. Illo nemo quae iste dolore ullam expedita rem, ex maxime, aut
          perspiciatis earum mollitia. Exercitationem, maxime earum? Aliquam
          repellat ea cupiditate enim a voluptas delectus quam nulla id animi
          dicta cum soluta inventore autem, at laboriosam debitis totam
          provident sunt, consequuntur aperiam minima. Repellat deleniti
          voluptatibus quod. Excepturi repudiandae consectetur, possimus
          doloribus itaque veritatis quia id recusandae quidem vel? Autem
          doloribus corporis explicabo, sapiente, repellat at illo libero enim
          dicta debitis recusandae temporibus cumque. At, quisquam omnis!
        </div>
      </div>
    </section>
  );
};

export default Contact;
