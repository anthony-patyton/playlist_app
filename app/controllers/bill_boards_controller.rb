class BillBoardsController < ApplicationController

  def index 
    @billboards = BillBoard.all
    render component: 'BillBoards', props: { billboards: @billboards }
  end
 
  def show
    @billboard = BillBoard.find(params[:id])
    render component: 'BillBoard', props: { billboard: @billboard }
  end

  def new
    @billboard = BillBoard.new
    render component: 'BillBoardNew', props: { billboard: @billboard }
  end
 
  def create 
    @billboard = BillBoard.new(bill_board_params)

    if @billboard.save
      redirect_to bill_boards_path
    else 
      render component: 'BillBoardNew', props: { billboard: @billbaord }
    end
  end

  def edit
    @billboard = BillBoard.find(params[:id])
    render component: 'BillBoardEdit', props: { billboard: @billboard }
  end

  def update
    @billboard = BillBoard.find(params[:id]) 
    
    if @billboard.update(bill_board_params)
      redirect_to bill_boards_path
    else
      render component: 'BillBoardEdit', props: { billboard: @billboard }
    end
  end
  
  def delete 
    BillBoard.find(params[:id]).destroy
    redirect_to bill_boards_path
  end
  
  private

  def bill_board_params
    params.require(:billboard).permit(:title)
  end
end
