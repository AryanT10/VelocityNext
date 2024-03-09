import { CarProps } from '@/types';
import React from 'react'

interface CarDetailsProps{
	isOpen: Boolean;
	closeModal: () => void;
	car: CarProps;
}

const CarDetails = ({isOpen, closeModal, car}) => {
  return (
	<div>CarDetails</div>
  )
}

export default CarDetails