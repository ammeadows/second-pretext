var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "syllabus",
  "level": "1",
  "url": "syllabus.html",
  "type": "Section",
  "number": "",
  "title": "Syllabus",
  "body": " Syllabus        Course Information  This is the syllabus for course name (MATH xxx, section xxx) for [term] 20xx. It is a [n] credit course.    Instructor  Prof. Lastname, Office Location, prof.lastname@example.edu .    Student Hours  TBD    Class meets  course times and location.    Course Description  course description from catalog    Prerequisite  list of prerequisites    Textbook and course materials   textbook name by textbook author.       Course Overview        Assessments and Grades     "
},
{
  "id": "sec-course-info-2",
  "level": "2",
  "url": "syllabus.html#sec-course-info-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "course name (MATH xxx, section xxx) "
},
{
  "id": "notes-week-01",
  "level": "1",
  "url": "notes-week-01.html",
  "type": "Section",
  "number": "",
  "title": "Week 1",
  "body": " Week 1   This is an outline of the topics we covered in the first week of class.     Monday 8\/22      Wednesday 8\/24      Friday 8\/26     "
},
{
  "id": "notes-week-02",
  "level": "1",
  "url": "notes-week-02.html",
  "type": "Section",
  "number": "",
  "title": "Week 2",
  "body": " Week 2   Monday      Wednesday      Friday     "
},
{
  "id": "activity-01-intro-activity",
  "level": "1",
  "url": "activity-01-intro-activity.html",
  "type": "Worksheet",
  "number": "",
  "title": "My First Activity",
  "body": " My First Activity    Let's start doing some math!      Find the sum of the first 10 positive integers, .         This is my test figure         Suppose is a convergent sequence and is a subsequence of . By lemma 5.9 , so so holds.    "
},
{
  "id": "activity-01-intro-activity-3",
  "level": "2",
  "url": "activity-01-intro-activity.html#activity-01-intro-activity-3",
  "type": "Worksheet Exercise",
  "number": "SF1",
  "title": "",
  "body": "  Find the sum of the first 10 positive integers, .   "
},
{
  "id": "activity-01-intro-activity-4",
  "level": "2",
  "url": "activity-01-intro-activity.html#activity-01-intro-activity-4",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "     This is my test figure     "
},
{
  "id": "activity-01-intro-activity-5",
  "level": "2",
  "url": "activity-01-intro-activity.html#activity-01-intro-activity-5",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "   Suppose is a convergent sequence and is a subsequence of . By lemma 5.9 , so so holds.   "
},
{
  "id": "handouts-2",
  "level": "1",
  "url": "handouts-2.html",
  "type": "Handout",
  "number": "",
  "title": "Handout Title",
  "body": " Handout Title   A first paragraph with some space for notes below it.   "
},
{
  "id": "homework-2",
  "level": "1",
  "url": "homework-2.html",
  "type": "Worksheet",
  "number": "",
  "title": "MATH 351 Homework",
  "body": "  MATH 351 Homework  Analysis Due at 2pm Monday 9\/25  Read Chapter 2 of the book. For this homework, using LaTeX gives one point of extra credit for each problem.    Prove that if and are countably infinite sets, then so is .    Given any set , consider the dodgeball set . Show that set consisting of all functions has the same cardinality as the power set consisting of all subsets of .      Definition 1 . Given a countable collection of sets , , we define the intersection and union of these sets as     Nested intervals    Use one of the definition above to restate the Nested Interval Property.    Find with proof a sequence of nonempty nested intervals of the form such that .    What does this say about the Nested Interval Property?      Find with proof a sequence of (not necessarily nested) intervals of the form such that .    Consider the intervals .    Are the sets nested? Why or why not?    Find with proof the intersection .    What does this say about the Nested Interval Property?      Suppose is a nonempty bounded set of real numbers and is an upper bound for .    Prove or disprove: if , then .    Prove or disprove: if , then for every , there is some such that .      "
},
{
  "id": "homework-2-5",
  "level": "2",
  "url": "homework-2.html#homework-2-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Definition 1 "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
