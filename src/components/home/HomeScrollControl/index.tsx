import { Preload, ScrollControls, Scroll, useScroll, Image as ImageImpl } from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { FC, Suspense, useRef } from 'react';
import { Group } from 'three';

import styles from './style.module.css';

import { PopUp } from '~/components/common/intersection-animations/PopUp';

const Images: FC = () => {
	const { width, height } = useThree((state) => state.viewport);
	const data = useScroll();
	const group = useRef<Group>(null!);
	useFrame(() => {
		if (group.current) {
      {/** @ts-ignore */}
			group.current.children[0].material.zoom = 1 + data.range(0, 1 / 3) / 3;
      {/** @ts-ignore */}
			group.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3;
      {/** @ts-ignore */}
			group.current.children[2].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 3;
      {/** @ts-ignore */}
			group.current.children[3].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2;
      {/** @ts-ignore */}
			group.current.children[4].material.zoom = 1 + data.range(1.25 / 3, 1 / 3) / 1;
      {/** @ts-ignore */}
			group.current.children[5].material.zoom = 1 + data.range(1.8 / 3, 1 / 3) / 3;
      {/** @ts-ignore */}
			group.current.children[5].material.grayscale = 1 - data.range(1.6 / 3, 1 / 3);
      {/** @ts-ignore */}
			group.current.children[6].material.zoom = 1 + (1 - data.range(2 / 3, 1 / 3)) / 3;
		}
	});
	return (
		<group ref={group}>
			<ImageImpl position={[-2, 0, 0]} scale={[4, height]} url="/random-programing-image-1.webp" />
			<ImageImpl position={[2, 0, 1]} scale={3} url="/school-fes-2022-illustrace.webp" />
			<ImageImpl position={[-2.3, -height, 2]} scale={[1, 3]} url="/school-fes-2022-room.webp" />
			<ImageImpl position={[-0.6, -height, 3]} scale={[1, 2]} url="/random-programing-image-1.webp" />
			<ImageImpl position={[0.75, -height, 3.5]} scale={1.5} url="/mcc-desktop-pc.webp" />
			<ImageImpl position={[0, -height * 1.5, 2.5]} scale={[1.5, 3]} url="/random-programing-image-1.webp" />
			<ImageImpl
				position={[0, -height * 2 - height / 4, 0]}
				scale={[width, height]}
				url="/random-programing-image-1.webp"
			/>
		</group>
	);
};


export const HomeScrollControl: FC = () => {
	return (
		<Canvas gl={{ antialias: false }} dpr={[1, 1.5]} className={styles.canvas}>
			<Suspense fallback={null}>
				<ScrollControls damping={4} pages={4}>
					<Scroll>
						<Images />
					</Scroll>
					<Scroll html>
            <PopUp>
						  <h1 className={styles.intro}>TUAT Tech Group</h1>
            </PopUp>
            <PopUp>
              <h1 className={styles.name1}>MCC</h1>
            </PopUp>
            <h2 className={styles.name2}>私たちは、<br />東京農工大学<br />マイクロコンピュータークラブです。</h2>
						<h1 className={styles.heading2}>new</h1>
            <PopUp>
						  <h1 className={styles.heading3}>World</h1>
            </PopUp>
					</Scroll>
				</ScrollControls>
				<Preload />
			</Suspense>
		</Canvas>
	);
};
