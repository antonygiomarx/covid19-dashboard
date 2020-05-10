import Header from './Header';
import TopCard from './TopCard';
import Overview from './Overview';
const App = ({ data }) => {
  return (
    <div>
      <Header cases={data.Global.TotalConfirmed} />
      <TopCard data={data.Global} />
      <Overview data={data} />
      <style global jsx>
        {`
          /* globals  */
          body {
            margin: 0;
            font-family: 'Inter', sans-serif;
            color: var(--baseColor);
            background: var(--baseBackground);
            /* border: 1px solid red; */
          }
          :root {
            --lime-green: hsl(163, 72%, 41%);
            --bright-red: hsl(356, 69%, 56%);
            --facebook: #168ef4;
            --twitter: hsl(203, 89%, 53%);
            --instagram-1: hsl(37, 97%, 70%);
            --instagram-2: hsl(329, 70%, 58%);
            --youTube: hsl(348, 97%, 39%);
            --gray: #5f616d;
            --cardGray: #f0f3fa;
            --lightGray: #f8f9fe;
            --cardTitle: #6f717e;
            --baseBackground: white;
            --baseColor: #1d2029;
            --switchSpinner: white;
            --switch: #5f616d;
          }
          .wrapper {
            padding: 0 30px;
          }
          .grid {
            display: grid;
            grid-row-gap: 25px;
          }
          .dark-mode {
            display: flex;
            justify-content: space-between;
            padding-top: 1em;
          }
          .checkbox {
            display: none;
          }
          .checkbox:checked ~ .switch:before {
            transform: translateX(0);
          }
          .switch {
            /* border: 1px solid red; */
            height: 40px;
            display: block;
            border-radius: 20px;
            background: var(--switch);
            width: 80px;
            padding: 5px;
            box-sizing: border-box;
            cursor: pointer;
            user-select: none;
          }
          .switch::before {
            content: '';
            display: block;
            width: 30px;
            height: 30px;
            background: var(--switchSpinner);
            border-radius: 50%;
            transform: translateX(40px);
            transition: 0.3s;
            will-change: transform;
          }
          /* header  */
          .header {
            /* border: 1px solid red; */
            background: var(--lightGray);
            padding-bottom: 100px;
            border-radius: 0 0 20px 20px;
            padding-top: 2em;
          }
          .header-total {
            color: var(--gray);
            margin: 0.5em 0;
            font-weight: 600;
            border-bottom: 1px solid var(--gray);
            padding-bottom: 1.5em;
          }
          h1 {
            margin: 0;
            font-size: 1.7em;
          }
          /* top card  */
          .top-cards {
            /* border: 1px solid green; */
            margin-top: -50px;
            margin-bottom: 3em;
          }
          /* card  */
          .card {
            border-radius: 8px;
            overflow: hidden;
            background: var(--cardGray);
            text-align: center;
            padding: 1.7em 0;
            position: relative;
          }
          .card:before {
            content: '';
            height: 4px;
            display: block;
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
          }
          .card.facebook::before {
            background: var(--facebook);
          }
          .card.twitter::before {
            background: var(--twitter);
          }
          .card.instagram::before {
            background-image: linear-gradient(
              to right,
              var(--instagram-1) 0%,
              var(--instagram-2) 100%
            );
          }
          .card.youtube::before {
            background: var(--youTube);
          }

          .card-title {
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--cardTitle);
            font-size: 0.9em;
            font-weight: bold;
          }
          .card-title img {
            margin-right: 5px;
          }

          .card-followers {
            /* border: 1px solid green; */
          }

          .card-followers-number {
            /* border: 1px solid red; */
            font-size: 50px;
            font-weight: 700;
          }
          .card-followers-title {
            /* border: 1px solid blue; */
            display: block;
            text-transform: uppercase;
            color: var(--cardTitle);
            letter-spacing: 5px;
            font-size: 0.75em;
          }

          .card-today {
            margin-top: 20px;
            color: var(--lime-green);
            font-size: 0.7em;
            font-weight: bold;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .card-today img {
            margin-right: 5px;
          }

          /* overview  */
          .overview {
            padding-bottom: 2em;
          }

          h2 {
            color: var(--gray);
          }

          .card-small {
            /* border: 1px solid red; */
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-row-gap: 1em;
            background: var(--cardGray);
            border-radius: 8px;
            padding: 1.7em;
          }
          .card-small p {
            margin: 0;
          }

          .card-small-views {
            /* border: 1px solid green; */
            color: var(--cardTitle);
            font-weight: bold;
            font-size: 0.9em;
          }

          .card-small-icon {
            /* border: 1px solid orange; */
            text-align: right;
          }

          .card-small-number {
            /* border: 1px solid purple; */
            font-weight: bold;
            font-size: 2.5em;
            line-height: 0.9;
          }

          .card-small-percentage {
            /* border: 1px solid rgb(38, 0, 255); */
            text-align: right;
            display: flex;
            align-items: flex-end;
            color: var(--lime-green);
            justify-content: flex-end;
            font-size: 0.8em;
            font-weight: bold;
          }
          .card-small-percentage.is-danger {
            color: var(--bright-red);
          }
          .card-small-percentage span {
            display: flex;
            align-items: center;
          }
          .card-small-percentage img {
            margin-right: 5px;
          }

          @media screen and (min-width: 480px) {
            .grid {
              /* border: 1px solid purple; */
              grid-template-columns: 1fr 1fr;
              grid-column-gap: 25px;
            }
            .wrapper {
              max-width: 1440px;
              margin: auto;
            }
          }

          @media screen and (min-width: 768px) {
            .grid {
              grid-template-columns: 1fr 1fr 1fr;
            }
          }

          @media screen and (min-width: 1024px) {
            .grid {
              grid-template-columns: 1fr 1fr 1fr 1fr;
            }
            .header-total {
              border: none;
            }
            .header-grid {
              display: grid;
              grid-template-columns: 1fr 200px;
            }
          }

          .is-dark-mode {
            --cardGray: #252b43;
            --baseBackground: #1d2029;
            --baseColor: white;
            --gray: #8088ad;
            --lightGray: #1d2029;
            --cardTitle: #8088ad;
            --switchSpinner: #282943;
            --switch: linear-gradient(to right, #4796d2 0%, #37ce8f 100%);
          }

          .is-light-mode {
            --gray: #5f616d;
            --cardGray: #f0f3fa;
            --lightGray: #f8f9fe;
            --cardTitle: #6f717e;
            --baseBackground: white;
            --baseColor: #1d2029;
            --switchSpinner: white;
            --switch: #5f616d;
          }

          @media (prefers-color-scheme: dark) {
            :root {
              --cardGray: #252b43;
              --baseBackground: #1d2029;
              --baseColor: white;
              --gray: #8088ad;
              --lightGray: #1d2029;
              --cardTitle: #8088ad;
              --switchSpinner: #282943;
              --switch: linear-gradient(to right, #4796d2 0%, #37ce8f 100%);
            }
          }
        `}
      </style>
    </div>
  );
};
export default App;
