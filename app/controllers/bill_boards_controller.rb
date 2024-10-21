class BillBoardsController < ApplicationController
  before_action :set_bill_board, only: [ :show, :edit, :update, :destroy ]

  def index
    @billboards = BillBoard.all
    render component: "BillBoards", props: { billboards: @billboards }
  end

  def show
    # authenticy_token:session[:_crsf_token]
    # if weant to send the _crsf_token { billboard: @billboard, authenticy_token: sessions[:_crsf_token] }
    render component: "BillBoard", props: { billboard: @billboard }
  end

  def new
    @billboard = BillBoard.new # we don't need to do this react rendering
    render component: "BillBoardNew", props: { billboard: @billboard }
  end

  def create
    @billboard = BillBoard.new(billboard_params)

    if @billboard.save
      redirect_to bill_boards_path
    else
      render component: "BillBoardNew", props: { billboard: @billbaord }
    end
  end

  def edit
    render component: "BillBoardEdit", props: { billboard: @billboard }
  end

  def update
    if @billboard.update(billboard_params)
      redirect_to bill_boards_path
    else
      render component: "BillBoardEdit", props: { billboard: @billboard }
    end
  end

  def destroy
    @billboard.destroy
    redirect_to bill_boards_path
  end

  private

    def billboard_params
      params.require(:billboard).permit(:title)
    end

    def set_bill_board
      @billboard = BillBoard.find(params[:id])
    end
end
