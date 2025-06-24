import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main className="sign-in">
      <aside className="testimonial">
        <Link href="/">
          <Image
            src="/assets/icons/logo.svg"
            alt="logo"
            width={32}
            height={32}
          />
          <h1>Steamlet</h1>
        </Link>
        <div className="description">
          <section>
            <article>
              <Image
                src="/assets/images/ztt.png"
                alt="ztt"
                width={100}
                height={100}
                className="rounded-full aspect-square"
              />
              <div>
                <h2>Zwe Thuta</h2>
                <p>zwethuta1998@gmail.com</p>
              </div>
            </article>
            <p>
              {" "}
              Steamlet is a platform for sharing and discovering videos. It
              allows users to create, share, and explore a wide range of video
              content, from tutorials to entertainment.{" "}
            </p>
            <figure>
              {Array.from({ length: 5 }).map((_, index) => (
                <Image
                  src="/assets/icons/star.svg"
                  alt="star"
                  width={20}
                  height={20}
                  key={index}
                />
              ))}
            </figure>
          </section>
        </div>
        <p>
          {" "}
          copyright © {new Date().getFullYear()} Steamlet. All rights reserved.
        </p>
      </aside>
      {/* Form */}
      <aside className="google-sign-in">
        <section>
          {" "}
          <Link href="/">
            <Image
              src="/assets/icons/logo.svg"
              alt="logo"
              width={40}
              height={40}
            />
            <h1>Steamlet</h1>
          </Link>
          <p>
            Create and share your videos with <span>Steamlet</span> in a few
            clicks.
          </p>
          <button>
            <Image
              src="/assets/icons/google.svg"
              alt="google"
              width={22}
              height={22}
            />
            <span>Sign in with Google</span>
          </button>
        </section>
      </aside>
      <div className="overlay"></div>
    </main>
  );
};

export default page;
