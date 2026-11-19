// Education, as on Akhil_Gandhi_Resume_Immigration.docx. Shown at the bottom of the Experience page.
export interface School {
	school: string;
	degree: string;
	gpa: string;
	period: string;
}

const EDUCATION: Array<School> = [
	{
		school: 'University of Colorado Boulder',
		degree: 'M.S. Computer Science',
		gpa: '3.80/4.0',
		period: 'Aug 2022 – May 2024'
	},
	{
		school: 'Pune Institute of Computer Technology',
		degree: 'B.E. Computer Engineering',
		gpa: '3.91/4.0',
		period: 'Aug 2017 – Jun 2021'
	}
];

export default EDUCATION;
