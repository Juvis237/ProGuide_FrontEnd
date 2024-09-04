'use client'
import React, { useEffect, useState } from 'react'
import HeaderNav from '../header-nav/HeaderNav'
import SearchBar from '../search-bar/SearchBar'
import RequestStatusBar from '../request-status-bar/RequestStatusBar'
import Support from '../support/Support'
import TrackingCard from '../tracking-card/TrackingCard'
import { useAppDispatch, useAppSelector } from '@/lib/hook'
import { setDocumentRequest } from '@/lib/feature/request-data.slice'
import moment from 'moment'

const TrackingContainer = () => {
    const dispatch = useAppDispatch()
    const documentRequest = useAppSelector(
        (state) => state.documentRequest.documentRequest,
    )
    const userData = useAppSelector((state) => state.user.user)
    const [filteredRequests, setFilteredRequests] = useState(
        documentRequest || [],
    )

    useEffect(() => {
        const fetchDocumentRequested = async () => {
            const req = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/requests`,
                {
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json',
                        Accept: 'application/json',
                        Authorization: `Bearer ${localStorage.getItem('user-token')}`,
                    },
                },
            )

            const res = await req.json()
            const { requests } = res
            dispatch(setDocumentRequest(requests))
        }
        fetchDocumentRequested()
    }, [dispatch])

    useEffect(() => {
        setFilteredRequests(documentRequest || [])
    }, [documentRequest])

    const handleSearchChange = (searchTerm: string) => {
        const lowercasedFilter = searchTerm.toLowerCase()
        const filteredData = (documentRequest || []).filter((request) =>
            request.delivrable?.name?.toLowerCase().includes(lowercasedFilter),
        )
        setFilteredRequests(filteredData)
    }

    const handleCategoryChange = (category: string) => {
        if (category === 'all') {
            setFilteredRequests(documentRequest || [])
        } else {
            const filtered = (documentRequest || []).filter(
                (request) => request.status === category,
            )
            setFilteredRequests(filtered)
        }
    }
    const handleDateFilterChange = (filter: string) => {
        let filtered = documentRequest || []
        const now = moment()

        if (filter === '3 days') {
            const dateLimit = now.subtract(3, 'days')
            filtered = filtered.filter((request) =>
                moment(request.date).isAfter(dateLimit),
            )
        } else if (filter === '5 days') {
            const dateLimit = now.subtract(5, 'days')
            filtered = filtered.filter((request) =>
                moment(request.date).isAfter(dateLimit),
            )
        } else if (filter === '1 week') {
            const dateLimit = now.subtract(1, 'week')
            filtered = filtered.filter((request) =>
                moment(request.date).isAfter(dateLimit),
            )
        } else if (filter === '2 weeks') {
            const dateLimit = now.subtract(2, 'weeks')
            filtered = filtered.filter((request) =>
                moment(request.date).isAfter(dateLimit),
            )
        } else if (filter === '1 month') {
            const dateLimit = now.subtract(1, 'month')
            filtered = filtered.filter((request) =>
                moment(request.date).isAfter(dateLimit),
            )
        }

        setFilteredRequests(filtered)
    }

    return (
        <section className="w-full min-h-screen bg-primary">
            <HeaderNav
                title="Tracking"
                link="/dashboard"
                imageSrc={userData ? userData?.profile : '/assets/avatar.svg'}
                marginTop="pt-8"
            />
            <div className="pt-12">
                <section
                    className={`bg-white pt-8 min-h-screen pb-32 px-4 rounded-t-3xl ${documentRequest && documentRequest?.length < 0 && 'flex justify-center items-center'}`}
                >
                    {documentRequest && documentRequest.length > 0 ? (
                        <>
                            <SearchBar
                                onSearchChange={handleSearchChange}
                                onDateFilterChange={handleDateFilterChange}
                            />
                            <RequestStatusBar
                                onCategoryChange={handleCategoryChange}
                            />
                            <TrackingCard requests={filteredRequests} />
                        </>
                    ) : (
                        <div>
                            <h4 className="font-bold text-[1.1rem] sm:text-xl mb-2 text-2xl text-center">
                                No documents to track available!
                            </h4>
                        </div>
                    )}
                </section>
            </div>
            <Support />
        </section>
    )
}

export default TrackingContainer
