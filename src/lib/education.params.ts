// Education, as on Akhil_Gandhi_Resume_Immigration.docx. Shown at the bottom of the Experience page.
import Assets from './data/assets';
import type { Asset } from './types';

export interface School {
	school: string;
	degree: string;
	gpa: string;
	period: string;
	logo: Asset;
	/** Logo colour, used for the card glow. */
	color: string;
	/** Round seal on a white square: crop it to a circle. */
	round?: boolean;
}

const EDUCATION: Array<School> = [
	{
		school: 'University of Colorado Boulder',
		degree: 'M.S. Computer Science',
		gpa: '3.80/4.0',
		period: 'Aug 2022 – May 2024',
		logo: Assets.CUBoulder,
		color: '#CFB87C' // CU gold
	},
	{
		school: 'Pune Institute of Computer Technology',
		degree: 'B.E. Computer Engineering',
		gpa: '3.91/4.0',
		period: 'Aug 2017 – Jun 2021',
		logo: Assets.PICT,
		color: '#1E5A8C', // PICT seal blue
		round: true
	}
];

export default EDUCATION;
