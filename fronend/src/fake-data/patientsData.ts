const patientsData = [
    { id: 1, firstName: 'David', lastName: 'Barlett', status: '144/91 - 80 BPM', lastMeasurement: 'Aug 11, 2020', lastVisit: 'May 27, 2020' },
    { id: 2, firstName: 'Samantha', lastName: 'Jones', status: '152/96 - 78 BPM', lastMeasurement: 'Jun 13, 2020', lastVisit: null },
    { id: 3, firstName: 'Kate', lastName: 'Miller', status: '135/80 - 72 BPM', lastMeasurement: 'Aug 17, 2020', lastVisit: 'Jul 9, 2020' },
    { id: 4, firstName: 'Matthew', lastName: 'Devon', status: '130/81 - 70 BPM', lastMeasurement: 'Aug 18, 2020', lastVisit: 'May 8, 2020' },
    { id: 5, firstName: 'John', lastName: 'Crow', status: '120/76 - 65 BPM', lastMeasurement: 'Apr 30, 2020', lastVisit: null },
    { id: 6, firstName: 'Vanessa', lastName: 'Gleaves', status: '110/76 - 68 BPM', lastMeasurement: 'Aug 5, 2020', lastVisit: null },
    { id: 7, firstName: 'Alice', lastName: 'Smith', status: '130/85 - 75 BPM', lastMeasurement: 'Jul 15, 2020', lastVisit: 'Jun 10, 2020' },
    { id: 8, firstName: 'Robert', lastName: 'Brown', status: '140/90 - 80 BPM', lastMeasurement: 'Aug 12, 2020', lastVisit: 'May 15, 2020' },
    { id: 9, firstName: 'Emily', lastName: 'Davis', status: '125/78 - 70 BPM', lastMeasurement: 'Jul 20, 2020', lastVisit: 'Apr 25, 2020' },
    { id: 10, firstName: 'James', lastName: 'Wilson', status: '132/88 - 72 BPM', lastMeasurement: 'Jun 30, 2020', lastVisit: 'May 5, 2020' },
    { id: 11, firstName: 'Linda', lastName: 'Martinez', status: '145/92 - 78 BPM', lastMeasurement: 'Aug 10, 2020', lastVisit: 'Mar 3, 2020' },
    { id: 12, firstName: 'Michael', lastName: 'Anderson', status: '138/85 - 74 BPM', lastMeasurement: 'May 22, 2020', lastVisit: null },
    { id: 13, firstName: 'Sarah', lastName: 'Taylor', status: '136/84 - 76 BPM', lastMeasurement: 'Jul 18, 2020', lastVisit: 'Jun 12, 2020' },
    { id: 14, firstName: 'David', lastName: 'Thomas', status: '129/79 - 73 BPM', lastMeasurement: 'Mar 15, 2020', lastVisit: 'Feb 20, 2020' },
    { id: 15, firstName: 'Jessica', lastName: 'Jackson', status: '150/95 - 81 BPM', lastMeasurement: 'Aug 9, 2020', lastVisit: 'Apr 18, 2020' },
    { id: 16, firstName: 'William', lastName: 'White', status: '133/82 - 77 BPM', lastMeasurement: 'Jul 25, 2020', lastVisit: 'Mar 22, 2020' },
    { id: 17, firstName: 'Karen', lastName: 'Harris', status: '121/75 - 70 BPM', lastMeasurement: 'Apr 15, 2020', lastVisit: null },
    { id: 18, firstName: 'Christopher', lastName: 'Martin', status: '126/80 - 78 BPM', lastMeasurement: 'May 30, 2020', lastVisit: null },
    { id: 19, firstName: 'Patricia', lastName: 'Thompson', status: '143/89 - 82 BPM', lastMeasurement: 'Jun 11, 2020', lastVisit: 'May 9, 2020' },
    { id: 20, firstName: 'Daniel', lastName: 'Garcia', status: '137/88 - 76 BPM', lastMeasurement: 'Aug 1, 2020', lastVisit: 'Jul 5, 2020' },
    { id: 21, firstName: 'Nancy', lastName: 'Martinez', status: '115/70 - 68 BPM', lastMeasurement: 'Jul 2, 2020', lastVisit: null },
    { id: 22, firstName: 'Charles', lastName: 'Robinson', status: '128/76 - 72 BPM', lastMeasurement: 'Jun 20, 2020', lastVisit: 'Apr 10, 2020' },
    { id: 23, firstName: 'Elizabeth', lastName: 'Clark', status: '122/73 - 70 BPM', lastMeasurement: 'Jun 25, 2020', lastVisit: null },
    { id: 24, firstName: 'Mark', lastName: 'Rodriguez', status: '135/80 - 75 BPM', lastMeasurement: 'May 27, 2020', lastVisit: 'Apr 22, 2020' },
    { id: 25, firstName: 'Sophia', lastName: 'Lewis', status: '131/84 - 74 BPM', lastMeasurement: 'Jul 10, 2020', lastVisit: 'May 18, 2020' },
    { id: 26, firstName: 'Joseph', lastName: 'Lee', status: '139/91 - 79 BPM', lastMeasurement: 'Aug 5, 2020', lastVisit: null },
    { id: 27, firstName: 'Megan', lastName: 'Walker', status: '126/78 - 73 BPM', lastMeasurement: 'Jul 30, 2020', lastVisit: 'Jun 29, 2020' },
    { id: 28, firstName: 'Matthew', lastName: 'Hall', status: '142/87 - 80 BPM', lastMeasurement: 'Jun 15, 2020', lastVisit: null },
    { id: 29, firstName: 'Laura', lastName: 'Allen', status: '134/80 - 76 BPM', lastMeasurement: 'Jul 8, 2020', lastVisit: 'Apr 12, 2020' },
    { id: 30, firstName: 'Kevin', lastName: 'Young', status: '127/75 - 71 BPM', lastMeasurement: 'Aug 3, 2020', lastVisit: 'May 20, 2020' },
    { id: 31, firstName: 'Angela', lastName: 'Hernandez', status: '140/90 - 75 BPM', lastMeasurement: 'Aug 4, 2020', lastVisit: 'Jun 20, 2020' },
    { id: 32, firstName: 'Brian', lastName: 'King', status: '132/86 - 77 BPM', lastMeasurement: 'Jul 17, 2020', lastVisit: null },
    { id: 33, firstName: 'Ashley', lastName: 'Wright', status: '125/82 - 73 BPM', lastMeasurement: 'Jun 28, 2020', lastVisit: null },
    { id: 34, firstName: 'Eric', lastName: 'Scott', status: '138/84 - 79 BPM', lastMeasurement: 'May 15, 2020', lastVisit: 'Apr 2, 2020' },
    { id: 35, firstName: 'Lisa', lastName: 'Green', status: '129/78 - 72 BPM', lastMeasurement: 'Jul 4, 2020', lastVisit: 'Mar 18, 2020' },
    { id: 36, firstName: 'Steven', lastName: 'Adams', status: '135/80 - 74 BPM', lastMeasurement: 'Jun 22, 2020', lastVisit: 'May 5, 2020' },
    { id: 37, firstName: 'Michelle', lastName: 'Baker', status: '122/76 - 70 BPM', lastMeasurement: 'Aug 2, 2020', lastVisit: null },
    { id: 38, firstName: 'Paul', lastName: 'Gonzalez', status: '136/81 - 78 BPM', lastMeasurement: 'Jul 12, 2020', lastVisit: 'May 1, 2020' },
    { id: 39, firstName: 'Rebecca', lastName: 'Nelson', status: '130/79 - 73 BPM', lastMeasurement: 'Jun 26, 2020', lastVisit: null },
    { id: 40, firstName: 'Joshua', lastName: 'Carter', status: '145/94 - 82 BPM', lastMeasurement: 'Aug 7, 2020', lastVisit: 'Mar 30, 2020' },
    { id: 41, firstName: 'Deborah', lastName: 'Mitchell', status: '128/77 - 75 BPM', lastMeasurement: 'Jul 19, 2020', lastVisit: null },
    { id: 42, firstName: 'Samuel', lastName: 'Perez', status: '140/85 - 78 BPM', lastMeasurement: 'Jun 29, 2020', lastVisit: 'May 23, 2020' },
    { id: 43, firstName: 'Sharon', lastName: 'Roberts', status: '135/82 - 76 BPM', lastMeasurement: 'Jul 3, 2020', lastVisit: 'Apr 15, 2020' },
    { id: 44, firstName: 'Gregory', lastName: 'Turner', status: '130/80 - 75 BPM', lastMeasurement: 'Jun 16, 2020', lastVisit: null },
    { id: 45, firstName: 'Cynthia', lastName: 'Phillips', status: '125/73 - 72 BPM', lastMeasurement: 'Aug 8, 2020', lastVisit: 'Jul 14, 2020' },
    { id: 46, firstName: 'Frank', lastName: 'Campbell', status: '132/81 - 76 BPM', lastMeasurement: 'Jul 1, 2020', lastVisit: null },
    { id: 47, firstName: 'Anna', lastName: 'Parker', status: '138/85 - 74 BPM', lastMeasurement: 'May 25, 2020', lastVisit: 'Apr 8, 2020' },
    { id: 48, firstName: 'Raymond', lastName: 'Evans', status: '140/90 - 79 BPM', lastMeasurement: 'Jul 6, 2020', lastVisit: null },
    { id: 49, firstName: 'Beverly', lastName: 'Edwards', status: '128/76 - 70 BPM', lastMeasurement: 'Jun 19, 2020', lastVisit: 'May 12, 2020' },
    { id: 50, firstName: 'Jordan', lastName: 'Stewart', status: '134/78 - 72 BPM', lastMeasurement: 'Aug 19, 2020', lastVisit: null },
];

export default patientsData;