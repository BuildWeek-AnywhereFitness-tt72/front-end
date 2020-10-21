import React from "react";
import styled from "styled-components";
import { HeroImgJr } from "../../../reusable-components/reusableComponents";

const classTypeImages = {
	"yoga": "https://s3-alpha-sig.figma.com/img/68c4/d5f9/3ed31041aea23ed696a1ccf938e71e18?Expires=1604275200&Signature=IENbeAiGrMMr3OOiBnFSC8LMi9fj3Ta579Ya576sIiBTyGAcjuqJX41ttlrZ6waeTowGCU5AHTVpgR3sctz4i5bGYK5LBTJaWSFEx5-i-OzS2Vk78mnBBuT0UHW6hvZXWTM6uxjpMUHOXSAixyAR8H48gARkvDHEW7-wNdMif0ep2x1BIGs720mQktQEA1UNVrqy-rdMfDqPs6-tswsc-YjStK09qgqYuxnr1olTAYqrl23zfLKTbj4IbIEM6G2QKAEzj4o8N8yfZ5DMI0h0aQnvp9Eb8WtqqkKvaVsSHc0pJgVw4PVyNooGa3pZGq~ibuMuojNkbZwdz-1TtT42OA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
	"pilates": "https://s3-alpha-sig.figma.com/img/2535/7fd1/bdf851953043641813ea74cbd371fb0b?Expires=1604275200&Signature=ODUbmY6xgpUzSbhHYNZYmC6i5l11TFOhZhYsgdxsofAi0v34A27kp9PqZNFNhK-VlhnxrWYDTdWPITMophFUr2QYaTlSebwjOU8vfgM830thNiZiGjOTKwPMqgwaAuYRfML6aYjzam0lfXdsBIe7Fi0V2sjTvqwbWqi-wNCIzxsCm~zrmxL-IpL3LpVHQ~IFZQZNDj16Godxd0Rmq262FsmmAJTiWMssWOjRyTWKiWER0I0qPVhPNOuAKPnLePdYafSs6KDeAA8U4BtpjT2E7Dpe3OQILIdVfMookm~niPzTKQJXGydonOSw~LtHZgVPRfccHxJE3qr-SPFby9lYNg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
	"running": "https://s3-alpha-sig.figma.com/img/25a5/460f/c52fa12038e4f3a319108f5a8d394be7?Expires=1604275200&Signature=SFNgRjcCemw8t6ikew4t-SF0mffxj6a04~Ud6gQpBf27WpJ~NnPS1NJLk6RQE475ECcTdenX5A6gXFaJ74p-cU1j0cWTrNbujis4YFUwdmLw8QlFyLOlxIuptiAG5yJiGzJooHnmBcZmjYHCiTLVbocdrOgYRhxd1GTwh50h6wkvPH25fFJOMiV~FhxjvG9w4ptWlUgbWkR3WLnwJDJ~sXfEZQwRagdSkNKnbSuNW83WxS71q1C4m92fUnW8JiaVpMow1IufME-iodE4fN3XB4zZEtRRdVDRNIRZB66NMPAoHssgHPNrjCLAR6fzZiqwO6bOT3UtzusFMAhuFmOXVg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
	"boxing": "https://s3-alpha-sig.figma.com/img/021f/7aa7/3a10c49fdb80c8700de3559d72077492?Expires=1604275200&Signature=dvGDBZIwAG9FoQs5x-SuxpBxd~pK~U7zUf0UySloFUaLkK8G1meOpo1zhfAtrAbex5mHnYvOAofhIDPLHfoggXHP5WAKUDHdWgI0YyQV92hr0Rtor~n6kGZpFbaWjqB7Vl~nvEr0bvZ4fZ80LFrfnHSqGcUKJiQGieN6t-7N6jXRTTevZ8uQ0X2VGDHlNs25FhOCCqsRFqAY6TpIJG1zepv~tYgqBliYHChe6~xYxs-M~GXu1yizDBuykFJGWlUWZOFwQpLK9XkQJcCLQSNqUU92wNaVgTEW6R6WytocRJCUcSGrX~MO6AENU1aZppHQPNXqDvY-PGhRaAMblBZ8tA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
	"weightlifting": "https://s3-alpha-sig.figma.com/img/34c0/7661/6b6c50c6eca00530ce75d38b9732941e?Expires=1604275200&Signature=IPB0Nc8hEld-MhGh1cFEn2gGDw2d0j~W2V9x8H8DYALJtUxNA3FDvw6ZkSwSpao94QhXYgy1DM0yGfIxYHRVvfqn7QMVJyWlTDsmNn4wiDYE0ugsU8MUWPVzw2YKWFIwqi2p3Nf8ysP8JhAiHuMaXP53gYngkA97J6J5-F6-pPbKrOWQFNMH8UYpyZrbqcb19UtesrTPOS~TW1V7LZn6wkH5qVGwMOKOJ4hfI~nkAnJSbuHiP9WOyVt5mHq05HJHgDRCxYujy28MaLaSPtPnoZFHUGNykXhhNu4mwgA1WZwSOUUPpXis~R38rlWRfEBsf7rSMDnVUz6kcQqs9eWTyA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
	"dancing": "https://s3-alpha-sig.figma.com/img/d0ca/ab1e/9b8ce70e3f06b163027d1c240b2c338b?Expires=1604275200&Signature=YZu7aKonYS2eNuo7CxzuwW-r6n3j~gxEcC9xkH5CDridT1zKazD66-3W5Erh6uGjl762OGJ7~XO8~El3fwRAoNkyVEs2Wt5fbYgXLQ0bKsEjwROVvFmvNT~D1YMrEd98wM~KhGYQOTmfhgd~PXZf~z9TzARhdQUmXbKTAagUp~adqxLGRMnXrviAiQFW3GzScJkItQLsrX-HpIPA2Zeqow55cr7hsp5HDr4PCQbPSFBRBo-aQTvuJ6cMP5qisY2cRzf4M2PjupcLvhqaLYWZ7PmihcBYpq6Duh0py0PP9EiuUGngn0eOBWA56cNviq6Az-2yx10I1W5O0v27vamjOQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
	"stretch": "https://s3-alpha-sig.figma.com/img/2195/c1cb/5757938ae9c71dbbe35bdc30f0fd77eb?Expires=1604275200&Signature=YvCmJNodUiXyuE8ou6bOuuGk5sJQrIvo7MRbMheh4UtsmC~DIGDExQ~6Cbw-35ZmNdO2K8hvjmRkMetnGp~q6b4ETe4T5ZzadgTWNyL9xhFhnXu9zqzCRtom79sM~pjWxJO7OOexRIAbebV5ESrBpq7TwUreaMTp-A2JiIfwN0Nvgjx5qf9LaCfyBUt8FRQ1y5KFuy1niPbfJLCmNsANjgzECSzOSQDELAUi2anXKm5UoNlk8~T-kgR92VVc5FUyOph1gY5GGoXRA26YzRWke0Thh11kuWsZ5YjPlsT5fUbdqM108ct-X6RVn9S3dmLaVIoLsoQXKEMQGgY-gh1Tpg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
	"biking/spin": "https://s3-alpha-sig.figma.com/img/c567/9b7e/c879646378a75acaf15fac5b151cd710?Expires=1604275200&Signature=S46VzVPWheehuEn60DJOqO0CGpeAwS2amOjtKyfcaEn6anTIctn081BBIqKHhgnoAz4ICp~Lrq8c6I7k~U~M6fJJID8JqVcjxF4l499KmEDYb7jSTpp1p3exoWe8XqfhULLbwxmU1NLExHnzBqEIsJYsxJX1VNrUC37ty9JKRswiRmseU60o4891A~cxvD74zOyNhPE5Z4u4PfZqP196~JTOJ4ZUuyqAxxtI88CDlROANs9AYgXstbVnEwKA8OdRlPGkmf-9p5-5lpZ3LvWigu92gMfcq4xf~fmnPVUuWmZXpBstl-msxCV-ZLPNSxyebrK6yp6f32JYtYoLCxYWwQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
	"functional-fitness": "https://s3-alpha-sig.figma.com/img/c602/bd1f/4e320b3d4dfcf73ad1c35d38b2bed73e?Expires=1604275200&Signature=N-J-p2RtrVqTiffff80Tz9QOsF90FFVqlFO00Th5nJuKL4XaIIldFL3nLmRSdjZPZPSB7ZzlzvXcT2RVb9FAnOpdyf2oyOGvSsihlmQFKomKncYrmcIfBuBNe4gW7yAFIXtDJj~NrY6sO3AxqArUq1X9IiVYC~wSUXevfcq0u3Fs1lAAAQ5vKPZD53yYtUFIwn4VZlgkjwnODSVxf9jMCbLVD383A2LrAxkcMQ406h760H-accHdkEiZxsu2dBnAhsS6RSz9qpMltvt1I2SSCJCFTxiRVKrqbqywVx2stLoXLg7LW1ciTyJM~BsU2r~B4OA-ukhgj2vrPpVJJ3leVA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
	"bootcamp": "https://s3-alpha-sig.figma.com/img/8f5b/823a/60bda4f2857822296d671c396e8600b0?Expires=1604275200&Signature=Ywr9dt~OkBXOHKJzk~VY4BtYZNbN6EbwJ16Oh2O0osTEw7l3JgoplOmBkaUY-DNlPY8DH~XmiTZygkNNa0LJ~zgiLsSEzmCjVV-dTjPMCjh9RdLxEpNbEdMF2Cg2hEHD7GOb-Mm0-RKumg09KCT68bBu-dByYlPOqLxbZxm8ggR0att2Vwy6SxzYM8SM5X1hVCv48PAwNS1YB5wX5HN1McuAAcj417TjK~38vTXfH0ZDG--lWfOShs-DT~dm1UbIVL3SK9RnrFaQBGlmuO~~FQj1m8xhK8RDKakyQGVN~lYe17WXmWC5HYjrPe8wbTKjreKX8bjfkEpo8Qx8Crd9Dw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
	"cardio": "https://s3-alpha-sig.figma.com/img/20e0/874c/37d7f2ddae75941bff26040ba89eb12b?Expires=1604275200&Signature=MwMQj5L6X0YTDm1W5QqC74qk8hOrKWaqYBxtZ2ORJXUA~T~YPhUapDT3mgov8qcNdF59IR7cidP7PZMV6aNfgE94Fy6ZQzgCP1wzIXtPv2zAXG8Szs6Q6Ty4jkGtTabfJymXvABZd5LNjXzHdogGb~KkUompQ8pL4bs~W9L06SV5sp17PHo06u5POy4ycOFYt8hHC8u~tdhbX85ixiXvjCZLL6nN0eaPMh5aJIWDQsutzOAPaxRFTiQqtbOHbuSkJovym9grozO8~ZCTM6jY87h339EB1vFVaoqaFGDb9GkTqTm8awetftXQkeuwNBp4X1MlwDbIP8E0I2Bq27fc9Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
	"other": "https://s3-alpha-sig.figma.com/img/884d/be23/cb91098f8f470ddf0c046ca2b8601a7f?Expires=1604275200&Signature=cz-pvbepqI852znn3jTQR7Yxg22PzhMJML08v1SoS~5EuCsRFaZExA2jqdS9B0IreMu6s-cy3q~BLfRNF-b9jJWoN7Tm109tw1f5OQZlCQ5O8dsgCs~8RoHzhYLTdKs4HT1CCKiYmNSavLX1Cj--MDR7AVC3WENY8nOXIHJ91mYuJsyWWulzJTSnZhlkXm8iO-ts6m~IrNahDJI5lDl164p5hvkiCxa~1ric0oColT~-GsTySh9GsrU~yzSb-zwVlMMrmKvMWI3jkUbkdWk4SGlSe-I4NDnDdswoFnOm37cfYUYetvMTzm6F8-24eFTflz4Ir70SPb7vXWzrhFD6aw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
}

const StyledResultCard = styled.div`
	font-family: Raleway;
	/* width: 87.6rem; */
	width: 100%;
	height: 18.6rem;
	background-color: white;
	/* border: 1px solid black; */
	border-bottom: 1px solid lightgray;
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-evenly;
	align-items: center;
	padding: 2rem;
	div.card-container {
		display: flex;
		flex-flow: row nowrap;
		justify-content: center;
		align-items: center;
		&.left {
				width: 60%;
				border-right: 1px solid lightgray;
		}
		&.right {
			width: 20%;
		}
		div.class-card {
			display: flex;
			flex-flow: column nowrap;
			align-items: flex-start;
			p {
					font-size: 1.4rem;
					line-height: 1.6rem;
					font-weight: 500;
					font-style: normal;
				}
			&.details {
				width: 60%;
				h3 {
					font-size: 2rem;
					font-weight: 800;
					line-height: 2.35rem;
					font-style: normal;
					letter-spacing: 0.05;
					text-transform: uppercase;
					color: ${pr => pr.theme.mediumGray};
				}
				h6 {
					font-size: 1.6rem;
					font-weight: 600;
					line-height: 1.878rem;
					font-style: normal;
				}
			}
		}
	}
`;

const ResultImg = styled(HeroImgJr)`
	border-radius: 10px;
	height: 150px;
	width: 164px;
`;

const ResultCard = props => {
	const { result } = props;
	const { locations, name, type, } = result;
	// console.log(result);
	// console.log(locations, name, type);
	return (
		<StyledResultCard>
			<div className="card-container image">
				<ResultImg className="class-card image" url={classTypeImages["yoga"]} height="18.6rem" width="164px" position="center"></ResultImg>
			</div>
			<div className="card-container class-text left">
				<div className="class-card details">
					<h3>{type}</h3>
					<h6>{name}</h6>
					<p>{`${locations.address}, ${locations.city} ${locations.state} ${locations.zip}`}</p>
				</div>
			</div>
			<div className="card-container right">
				<div className="class-card description">
					<p>Lorem Ipsum there's no description to use from the endpoint. Lorem ipsum the session is without description.</p>
				</div>
			</div>
		</StyledResultCard>
	);
};

export default ResultCard;

// const SessionEx = {
//   "duration": "string",
//   "intensity": "string",
//   "locations": {
//     "address": "string",
//     "city": "string",
//     "locationid": 0,
//     "sessions": [
//       null
//     ],
//     "state": "string",
//     "zip": "string"
//   },
//   "maxsize": 0,
//   "name": "string",
//   "sessionid": 0,
//   "time": "2020-10-21T16:22:27.698Z",
//   "type": "string",
//   "users": [
//     {
//       "instructor": true,
//       "user": {
//         "password": "string",
//         "passwordNoEncrypt": "string",
//         "roles": [
//           {
//             "role": {
//               "name": "string",
//               "roleid": 0,
//               "users": [
//                 null
//               ]
//             }
//           }
//         ],
//         "sessions": [
//           null
//         ],
//         "userid": 0,
//         "username": "string"
//       }
//     }
//   ]
// }