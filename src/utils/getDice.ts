import DiceOneSVG from '../icons/dice/dice-one-solid-full.svg';
import DiceTwoSVG from '../icons/dice/dice-two-solid-full.svg';
import DiceThreeSVG from '../icons/dice/dice-three-solid-full.svg';
import DiceFourSVG from '../icons/dice/dice-four-solid-full.svg';
import DiceFiveSVG from '../icons/dice/dice-five-solid-full.svg';
import DiceSixSVG from '../icons/dice/dice-six-solid-full.svg';

export function getDice(value: 1 | 2 | 3 | 4 | 5 | 6) {
	switch (value) {
		case 1:
			return DiceOneSVG;
		case 2:
			return DiceTwoSVG;
		case 3:
			return DiceThreeSVG;
		case 4:
			return DiceFourSVG;
		case 5:
			return DiceFiveSVG;
		case 6:
			return DiceSixSVG;
	}
}
