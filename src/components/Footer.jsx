import { media, socials } from "../utils/data";
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="foot">
          <img src={media.logoDark} alt="" className="footer-logo" />
          <div>
            <div className="socials">
              {socials.map((social, index) => (
                <a
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                >
                  <img
                    src={social.img}
                    alt="social"
                    className={index === 4 ? "soc-last" : "soc"}
                  />
                </a>
              ))}
            </div>
            <a
              href="mailto:hello@edenprong.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#FFFFFF", fontWeight: "400" }}
            >
              Say 👋 at hello@edenprong.com
            </a>

            <a
              href="tel:09067031363"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#FFFFFF",
                fontWeight: "400",
                textDecoration: "none",
              }}
            >
              <p className="tel">09067031363</p>
            </a>
            <p className="address">Ikeja, Lagos, NG</p>
          </div>

          <p className="cpy">© Copyright 2024. EdenPro.</p>
        </div>
      </div>
    </footer>
  );
}
