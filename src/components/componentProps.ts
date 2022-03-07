import React from "react"

export type GreetProps = {
	name: string
	msgCount: number
}

export type personProps = {
	name: {
		first: string,
		last: string
	}
}

export type personListProps = {
	names: {
		first: string
		last: string
	}[]
}

export type parentProps = {
	children: React.ReactNode
}

export type childrenProps = {
	children: React.ReactNode
}
