"use client";
import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import { Tooltip as ReactTooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import { motion } from 'framer-motion';

const formatDate = (dateString: string) => {
  return new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(dateString));
};

const GithubContribution = () => {

  return (
    <motion.section
      className='overflow-hidden border border-foreground/10 rounded-md'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="border-b border-foreground/10 text-base p-3 font-bold"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Github Contribution
      </motion.h1>
      <motion.div
        className='border-foreground/10 p-3'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <GitHubCalendar
          blockSize={13}
          // hideColorLegend
          fontSize={12}
          // theme={{
          //   light: ['#f0f5ff', '#c0dbff', '#90c2ff', '#60a8ff', '#308fff'],
          //   dark: ['rgba(18 20 21 / 0.9) ', '#182840', '#203c60', '#285080', '#3279CC'],
          // }}
          username="ayush-khatrii"
          renderBlock={
            (block, activity) =>
              React.cloneElement(block, {
                'data-tooltip-id': 'github-tooltip',
                'data-tooltip-html': `${activity.count} activities on ${formatDate(activity.date)}`,
              })
          }
        />
        <ReactTooltip
          clickable
          openOnClick
          opacity={1}
          arrowColor='white' id="github-tooltip" />
      </motion.div>
    </motion.section >
  )
}

export default GithubContribution