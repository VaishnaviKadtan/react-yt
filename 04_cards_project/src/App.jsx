import React from "react";

import Card from "./components/Card";
import User from "./components/User";
import { LucideMessageCircleQuestionMark } from "lucide-react";

const App = () => {
  const jobOpenings = [
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_-aa4QAmLM93FQ0PPNQ0kNuxwSr3C84c8GTgI6LotBg&s=10",
      companyName: "Google",
      datePosted: "3 days ago",
      post: "Software Engineer, Backend",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$32/hour",
      location: "Bengaluru, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi6U-KSnY_r4hsTsVxDuaaM1suHkBJRHcyaf65xF5PJQ&s=10",
      companyName: "Amazon",
      datePosted: "5 days ago",
      post: "Software Development Engineer, AFFS",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$30/hour",
      location: "Pune, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM2tL_LqE0tXh0tBYRxY0_FnYVAJXw_0ArGg3BGHAByw&s=10",
      companyName: "Apple",
      datePosted: "2 weeks ago",
      post: "Software Engineer - Java",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "$34/hour",
      location: "Hyderabad, India",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/960px-Microsoft_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
      companyName: "Microsoft",
      datePosted: "1 week ago",
      post: "Software Engineer II",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$36/hour",
      location: "Hyderabad, India",
    },
    {
      brandLogo:
        "https://static.vecteezy.com/system/resources/thumbnails/004/201/564/small/meta-social-network-emblem-blue-stylish-letter-m-or-mobius-band-vector.jpg",
      companyName: "Meta",
      datePosted: "4 days ago",
      post: "Software Engineer, Full Stack",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$38/hour",
      location: "Bengaluru, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoMznz1zJ3fNTFggg26u-HrG1L7P1uQHJ4uqv7cishUA&s=10",
      companyName: "Netflix",
      datePosted: "3 weeks ago",
      post: "Senior Software Engineer",
      tag1: "Part Time",
      tag2: "Mid Level",
      pay: "$48/hour",
      location: "Mumbai, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS85n77QiM6FSEf8UQ03Vt6uWR6ajRhkPsvDt8IOE3SKAWGHp91_--dew&s=10",
      companyName: "NVIDIA",
      datePosted: "6 days ago",
      post: "Deep Learning Software Engineer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$44/hour",
      location: "Pune, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoGse1sJX-W7OzCb93Ek88mOQsORKwmv4uuehdi17TTw&s",
      companyName: "Salesforce",
      datePosted: "10 days ago",
      post: "Software Engineer, Platform",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$31/hour",
      location: "Hyderabad, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-2DQp1blu4d-2gFr5CZ1BnRW0lT0BS6S-euo4wf2LuA&s=10",
      companyName: "Adobe",
      datePosted: "2 weeks ago",
      post: "Software Development Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$33/hour",
      location: "Noida, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvUKjFWDizIcm5drqniSODQ5YgztVV0sfUKv6H9tgjyA&s=10",
      companyName: "Uber",
      datePosted: "5 weeks ago",
      post: "Backend Software Engineer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$41/hour",
      location: "Bengaluru, India",
    },
  ];

  console.log(jobOpenings);

  return (
    <div className="parent">
      {jobOpenings.map(function (elem, idx) {
        

        return (
          <div key={idx}>
            <Card
              company={elem.companyName}
              datePosted={elem.datePosted}
              location={elem.location}
              post={elem.post}
              pay={elem.pay}
              brandLogo={elem.brandLogo}
              tag1={elem.tag1}
              tag2={elem.tag2}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
