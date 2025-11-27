  export const getSubscriptionsForDate = (day:number) => {
    return subscriptions.filter(sub => sub.date === day);
  };

  export const handleDateClick = (day:any) => {
    setSelectedDate(day);
  };

 export  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

 export const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

 export const handleAddSubscription = () => {
    if (newSub.name && newSub.amount && newSub.date) {
      const sub = {
        id: Date.now(),
        name: newSub.name,
        amount: parseFloat(newSub.amount),
        date: parseInt(newSub.date),
        color: `#${Math.floor(Math.random()*16777215).toString(16)}`
      };
      setSubscriptions([...subscriptions, sub]);
      setNewSub({ name: '', amount: '', date: '' });
      setShowAddForm(false);
    }
  };

 export const handleDeleteSubscription = (id:any) => {
    setSubscriptions(subscriptions.filter(sub => sub.id !== id));
  };