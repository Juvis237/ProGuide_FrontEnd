'use client'
import React, { useEffect, useState } from 'react'
import DashboardSummaryCard from '../dashboard-summary-card/DashboardSummaryCard'
import Header from '../header/Header'
import SearchBar from '../search-bar/SearchBar'
import RequestStatusBar from '../request-status-bar/RequestStatusBar'
import RequestCard from '../request-card/RequestCard'
import Support from '../support/Support'
import HeaderNav from '../header-nav/HeaderNav'
import { setUser } from '@/lib/feature/user.slice'
import { useAppDispatch, useAppSelector } from '@/lib/hook'
import { setSchool } from '@/lib/feature/school.slice'
import { setDocumentRequest } from '@/lib/feature/request-data.slice'
import { setUserNotification } from '@/lib/feature/notification.slice'
import { toast } from '../ui/use-toast'
import ToastDescription from '../toast-description/ToastDescription'
import moment from 'moment'

const DashboardContainer = () => {
    const documentRequest = useAppSelector(
        (state) => state.documentRequest.documentRequest,
    )
    const userData = useAppSelector((state) => state.user.user)
    const [filteredRequests, setFilteredRequests] = useState(
        documentRequest || [],
    )

    const dispatch = useAppDispatch()
    const fetchNotifications = async () => {
        try {
            const req = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/notifications`,
                {
                    headers: {
                        'Content-type': 'application/json',
                        Accept: 'application/json',
                        Authorization: `Bearer ${localStorage.getItem('user-token')}`,
                    },
                },
            )

            const res = await req.json()
            if (res) {
                dispatch(setUserNotification(res))
            }
        } catch (error) {
            toast({
                variant: 'destructive',
                title: 'Error fetching notification',
                description: <ToastDescription description={`${error}`} />,
            })
        }
    }

    useEffect(() => {
        if (typeof localStorage !== 'undefined') {
            const storedUser = localStorage.getItem('user')
            if (storedUser) {
                const user = JSON.parse(storedUser)
                dispatch(setUser(user))
            }
        }
    }, [dispatch])

    useEffect(() => {
        const fetchSchools = async () => {
            const req = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/schools`,
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
            const { schools } = res
            dispatch(setSchool(schools))
        }
        fetchSchools()
    }, [dispatch])

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

    useEffect(() => {
        fetchNotifications()
    }, [])

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
        <div
            className={`px-4 ${documentRequest && documentRequest.length < 0 && 'pt-32'} pt-[4.5rem]`}
        >
            <HeaderNav
                link="/dashboard"
                title=""
                imageSrc={userData ? userData?.profile : '/assets/avatar.svg'}
                space="space"
            />
            <div
                className={`${documentRequest && documentRequest.length > 0 ? '' : 'img-bg-2 pt-8'}`}
            ></div>
            <DashboardSummaryCard />
            <Header
                title="My Requests"
                classes="font-bold mt-4 text-xl text-muted"
            />
            {documentRequest && documentRequest.length > 0 ? (
                <>
                    <SearchBar
                        onSearchChange={handleSearchChange}
                        onDateFilterChange={handleDateFilterChange}
                    />
                    <RequestStatusBar onCategoryChange={handleCategoryChange} />
                    <RequestCard requests={filteredRequests} />
                </>
            ) : (
                <div
                    className={`w-full rounded-2xl box-shadow flex justify-between items-center sm:flex-col p-4 mt-3`}
                >
                    <div className="flex justify-between w-full">
                        <div>
                            <h4 className="font-bold text-[1.1rem] sm:text-xl mb-2">
                                You haven’t made any request yet!
                            </h4>
                            <span className="text-secondary-foreground text-sm gap-y-3">
                                Get started and have your documents without a
                                glimpse of stress
                            </span>
                        </div>
                    </div>
                    <div className="w-full request-bg"></div>
                </div>
            )}
            <Support />
        </div>
    )
}

export default DashboardContainer
